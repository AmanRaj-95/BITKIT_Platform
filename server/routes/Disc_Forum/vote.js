const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");

const Question = require("../../models/Disc_Forum/Question");
const Answer = require("../../models/Disc_Forum/Answer");

// --- Vote on Question ---
router.post("/questions/:id/vote",authMiddleware, async (req, res) => {
  const { voteType, userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }

  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).send("Question not found");

    const existingVote = question.votedBy.find((v) => v.userId.toString() === userId);

    if (existingVote) {
      if (existingVote.voteType === voteType) {
        return res.status(400).json({ message: `You have already ${voteType}d this question` });
      } else {
        // Change vote
        question.votes += voteType === "upvote" ? 2 : -2;
        existingVote.voteType = voteType;
      }
    } else {
      question.votes += voteType === "upvote" ? 1 : -1;
      question.votedBy.push({ userId: new mongoose.Types.ObjectId(userId), voteType });
    }

    await question.save();
    return res.status(200).json({ message: "Vote recorded", votes: question.votes });
  } catch (err) {
    console.error("Question vote error:", err);
    return res.status(500).json({ error: err.message });
  }
});

// --- Vote on Answer ---
router.post("/answers/:id/vote", authMiddleware, async (req, res) => {
  const { voteType, userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }

  try {
    const answer = await Answer.findById(req.params.id);
    if (!answer) return res.status(404).send("Answer not found");

    const existingVote = answer.votedBy.find((v) => v.userId.toString() === userId);

    if (existingVote) {
      if (existingVote.voteType === voteType) {
        return res.status(400).json({ message: `You have already ${voteType}d this answer` });
      } else {
        answer.votes += voteType === "upvote" ? 2 : -2;
        existingVote.voteType = voteType;
      }
    } else {
      answer.votes += voteType === "upvote" ? 1 : -1;
      answer.votedBy.push({ userId: new mongoose.Types.ObjectId(userId), voteType });
    }

    await answer.save();
    return res.status(200).json({ message: "Vote recorded", votes: answer.votes });
  } catch (err) {
    console.error("Answer vote error:", err);
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
