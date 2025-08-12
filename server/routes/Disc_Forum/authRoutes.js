const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const User = require("../../models/Disc_Forum/User"); 
const BuySellUser = require("../../models/Buy_Sell/userModel");
const verifyCollegeUser = require("../../middlewares/authMiddleware");
const { sendEmail } = require("../../utils/sendEmail");

router.post("/login", verifyCollegeUser, async (req, res) => {
  try {
    const idToken = req.headers.authorization?.split(" ")[1];
    if (!idToken) return res.status(401).json({ message: "Missing token" });

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, name, email, picture } = decodedToken;

    // ✅ Step 1: Find or create Disc_Forum user
    let user = await User.findOne({ firebaseUid: uid });

      const isFirstTime = !user;
   

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        displayName: name,
        email: email,
        photoURL: picture,
      });
    }

    // ✅ Step 2: Find or create Buy_Sell user
    let buySellUser = await BuySellUser.findOne({ email });

    if (!buySellUser) {
      buySellUser = await BuySellUser.create({
        name: name,
        email: email,
      });
    }



        // ✅ Send welcome email once for first-time login
    if (isFirstTime) {
      await sendEmail({
        to: email,
        subject: "Welcome to BiTKiT 🎉",
        html: `
          <p>Hi ${name},</p>
          <p>Welcome to <strong>BiTKiT</strong> — your one-stop student hub at BIT Mesra!</p>

<p>We're thrilled to have you join our community. Here's everything you can explore on BiTKiT:</p>

<ul style="padding-left: 20px; line-height: 1.6;">
  <li>💬 <strong>Discussion Forum:</strong> Ask questions, share insights, and help peers solve academic doubts.</li>
  <li>🛍️ <strong>Buy & Sell:</strong> Post or browse items — from textbooks to gadgets — within the student network.</li>
  <li>📚 <strong>Academic Resources:</strong> Access study notes, previous year papers, and curated learning material.</li>
  <li>🚀 <strong>And much more !!!</strong></li>
</ul>
          <p>We're excited to have you on board!</p>
          <p><a href="http://localhost:5173">Get started now</a> 🚀</p>
          <br/>
          <p>– Team BiTKiT</p>
        `,
      });
    }
    else{
      console.log("User already exists, skipping welcome email.");
    }


    // ✅ Step 3: Combine response
    return res.status(200).json({
      forumUser: {
        _id: user._id,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        firebaseUid: user.firebaseUid,
      },
      buySellUser: {
        _id: buySellUser._id,
        name: buySellUser.name,
        email: buySellUser.email,
        role: buySellUser.role,
      },
    });

  } catch (err) {
    console.error("Login failed:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;