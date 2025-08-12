// routes/forum/answers.js
const express = require("express");
const router = express.Router();
const Answer = require("../../models/Disc_Forum/Answer");
const authMiddleware = require('../../middlewares/authMiddleware');

router.delete("/answers/:answerId", authMiddleware, async (req, res) => {
  const answerId = req.params.answerId;
  const userId = req.body.userId;

  try {
    const answer = await Answer.findById(answerId);
    if (!answer) {
      return res.status(404).json({ message: "Answer not found" });
    }

    if (answer.user.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorized to delete this answer" });
    }

    await answer.deleteOne();
    res.status(200).json({ message: "Answer deleted successfully" });
  } catch (err) {
    console.error("Error deleting answer:", err);
    res.status(500).json({ message: "Server error while deleting answer" });
  }
});

module.exports = router;
