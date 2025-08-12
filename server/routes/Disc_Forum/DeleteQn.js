const express = require("express");
const router = express.Router();
const QuestionDB = require("../../models/Disc_Forum/Question");
const { auth } = require("firebase-admin");
const authMiddleware = require("../../middlewares/authMiddleware");

router.delete("/questions/:id",authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const question = await QuestionDB.findById(id);
    console.log("Deleting question:", question);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    console.log("User ID from request body:", userId);
    console.log("Question user ID:", question.user);
    // // Optional: Check if the logged-in user owns the question
    if (String(question.user) !== String(userId)) {
      return res.status(403).json({ message: "Unauthorized: Cannot delete this question" });
    }

    await QuestionDB.findByIdAndDelete(id);

    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    console.error("Error deleting question:", error);
    res.status(500).json({ message: "Error deleting question", error: error.message });
  }
});

module.exports = router;
