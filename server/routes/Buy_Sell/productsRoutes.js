const express = require("express");
const authMiddleware = require("../../middlewares/authMiddleware");
const Product = require("../../models/Buy_Sell/productModel");
const cloudinary = require("../../config/cloudinaryConfig");
const multer = require("multer");
const User = require("../../models/Buy_Sell/userModel");
// const Notification = require("../../models/Buy_Sell/notificationModel");
const Bid = require("../../models/Buy_Sell/bidModel");
const { sendEmail } = require("../../utils/sendEmail");

const router = express.Router();

// add a new product
router.post("/add-product", authMiddleware, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();

    // find all admins
    const admins = await User.find({ role: "admin" });

    admins.forEach(async (admin) => {
      if (admin.email) {
        await sendEmail({
          to: admin.email,
          subject: "New Product Added on BiTKiT",
          html: `
            <p>Hello ${admin.name},</p>
            <p>A new product has been added to BiTKiT${
              req.user?.name ? ` by <strong>${req.user.name}</strong>` : ""
            }.</p>
            <p>Visit <a href="https://bitkit-green.vercel.app/admin">BiTKiT Admin Panel</a> to review it.</p>
            <br/>
            <p>– Team BiTKiT</p>
          `,
        });
      }
    });

    res.send({
      success: true,
      message: "Product added. Upload images for approval.",
      product: savedProduct, // ✅ important for frontend to get _id
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get all products
router.post("/get-products", async (req, res) => {
  try {
    const { seller, category = [], age = [], status, search } = req.body || {};
    let filters = {};
    if (seller) {
      filters.seller = seller;
    }
    if (status) {
      filters.status = status;
    }
    // filter by category
    if (category.length > 0) {
      filters.category = { $in: category };
    }
    // search by name, category, or description
    if (search && search.trim() !== "") {
      filters.$or = [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    const products = await Product.find(filters)
      .populate("seller")
      .sort({ createdAt: -1 });
    res.send({
      success: true,
      data: products,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get product by id
router.get("/get-product-by-id/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("seller");
    res.send({
      success: true,
      data: product,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// edit a product
router.put("/edit-product/:id", authMiddleware, async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// delete a product
router.delete("/delete-product/:id", authMiddleware, async (req, res) => {
  try {
    // Fetch product and populate seller before deletion
    const product = await Product.findById(req.params.id).populate("seller");

    if (!product || !product.seller?.email) {
      return res.send({
        success: false,
        message: "Product or seller not found",
      });
    }

    // First, delete all bids related to the product
    await Bid.deleteMany({ product: req.params.id });

    // Delete all product images from Cloudinary
    const deleteImagePromises = product.images.map((img) =>
      cloudinary.uploader.destroy(img.public_id)
    );
    await Promise.all(deleteImagePromises);

    // Then, delete the product itself
    await Product.findByIdAndDelete(req.params.id);

    // ✅ Send email only if the user is an admin
    const isAdmin = req.user.email === "btech10649.22@bitmesra.ac.in";
    if (isAdmin) {
      await sendEmail({
        to: product.seller.email,
        subject: `Your Product Has Been Deleted`,
        html: `
          <p>Hello ${product.seller.name},</p>
          <p>Your product <strong>${product.name}</strong> has been <strong>deleted</strong> by the BiTKiT admin team.</p>
          <p>If you believe this was a mistake, please contact support.</p>
          <br/>
          <p>– Team BiTKiT</p>
        `,
      });
    }

    res.send({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get image from pc
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

router.post(
  "/upload-image-to-product",
  multer({ storage: storage }).single("file"),
  async (req, res) => {
    try {
      // upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "BuyAndSell",
      });
      const productId = req.body.productId;
      await Product.findByIdAndUpdate(productId, {
        $push: {
          images: {
            url: result.secure_url,
            public_id: result.public_id,
          },
        },
      });

      res.send({
        success: true,
        message: "Image uploaded successfully",
        data: {
          url: result.secure_url,
          public_id: result.public_id,
        },
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  }
);

// update product status
router.put("/update-product-status/:id", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true } // return updated product
    ).populate("seller");

    if (!updatedProduct || !updatedProduct.seller?.email) {
      return res.send({
        success: false,
        message: "Product or seller not found",
      });
    }

    // Send email to seller
    try {
      await sendEmail({
        to: updatedProduct.seller.email,
        subject: `Your Product Status Has Been Updated`,
        html: `
      <p>Hello ${updatedProduct.seller.name},</p>
      <p>Your product <strong>${updatedProduct.name}</strong> has been <strong>${status}</strong> by BiTKiT admin team.</p>
      <p>Visit your <a href="https://bitkit-green.vercel.app/profile">profile</a> to view details.</p>
      <br/>
      <p>– Team BiTKiT</p>
    `,
      });
    } catch (emailErr) {
      console.error("✅ Email sent failed but continuing:", emailErr.message);
    }

    res.send({
      success: true,
      message: "Product status updated successfully",
    });
  } catch (error) {
    console.error("Error updating product status:", error);
    res.send({
      success: false,
      message: error.message,
    });
  }
});


// Delete product image
router.post("/delete-product-image", authMiddleware, async (req, res) => {
  try {
    const { productId, public_id } = req.body;

    // 1. Delete from Cloudinary
    const cloudinaryResult = await cloudinary.uploader.destroy(public_id);

    if (cloudinaryResult.result !== "ok") {
      return res.send({
        success: false,
        message: "Failed to delete image from Cloudinary",
      });
    }

    // 2. Remove from MongoDB
    await Product.findByIdAndUpdate(productId, {
      $pull: {
        images: { public_id },
      },
    });

    res.send({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
