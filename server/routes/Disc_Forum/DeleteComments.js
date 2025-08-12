// routes/forum/comments.js
const express = require("express");
const router = express.Router();
const Comment = require("../../models/Disc_Forum/Comment");
const authMiddleware = require('../../middlewares/authMiddleware');

router.delete("/comments/:commentId", authMiddleware, async (req, res) => {
  const commentId = req.params.commentId;
  const userId = req.body.userId;

  try {
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.user.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorized to delete this comment" });
    }

    await comment.deleteOne();
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.error("Error deleting comment:", err);
    res.status(500).json({ message: "Server error while deleting comment" });
  }
});

module.exports = router;
