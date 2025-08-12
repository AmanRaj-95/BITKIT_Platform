// routes/blockUser.js
const express = require("express");
const router = express.Router();
const admin = require("../firebaseAdmin");
const authMiddleware = require("../middlewares/authMiddleware");

const allowedEmail =process.env.ADMIN_EMAIL;

router.post("/block-user", authMiddleware, async (req, res) => {
  const { uidToBlock } = req.body;

  if (req.user.email !== allowedEmail) {
    return res.status(403).json({ message: `Unauthorized: Only ${allowedEmail} can block users` });
  }

  try {
    await admin.auth().updateUser(uidToBlock, { disabled: true });
    return res.status(200).json({ message: "User has been blocked (disabled)" });
  } catch (error) {
    console.error("Error blocking user:", error);
    return res.status(500).json({ message: "Error blocking user", error: error.message });
  }
});

module.exports = router;
