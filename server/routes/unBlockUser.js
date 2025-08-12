// routes/unblockUser.js
const express = require("express");
const router = express.Router();
const admin = require("../firebaseAdmin");
const authMiddleware = require("../middlewares/authMiddleware");

const allowedEmail = process.env.ADMIN_EMAIL;

router.post("/unblock-user", authMiddleware, async (req, res) => {
  const { uidToUnblock } = req.body;

  if (req.user.email !== allowedEmail) {
    return res.status(403).json({ message: `Unauthorized: Only ${allowedEmail} can unblock users` });
  }

  try {
    await admin.auth().updateUser(uidToUnblock, { disabled: false });
    return res.status(200).json({ message: "User has been unblocked (enabled)" });
  } catch (error) {
    console.error("Error unblocking user:", error);
    return res.status(500).json({ message: "Error unblocking user", error: error.message });
  }
});

module.exports = router;
