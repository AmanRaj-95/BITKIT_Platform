const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const commentDB = require('../../models/Disc_Forum/Comment');
const Question = require('../../models/Disc_Forum/Question');
const { sendEmail } = require('../../utils/sendEmail');
const authMiddleware = require('../../middlewares/authMiddleware');


router.post('/comments/:id', authMiddleware, async (req, res) => {
  try {
    const { comment, user } = req.body;
    const questionId = req.params.id;

    // Validate input
    if (!comment || !user) {
      return res.status(400).send({
        message: 'Comment text and user ID are required',
        status: false,
      });
    }

    if (
      !mongoose.Types.ObjectId.isValid(user) ||
      !mongoose.Types.ObjectId.isValid(questionId)
    ) {
      return res.status(400).send({
        message: 'Invalid user ID or question ID',
        status: false,
      });
    }

    // 👉 Get question + owner info
    const question = await Question.findById(questionId).populate('user');
    if (!question) {
      return res.status(404).send({
        message: 'Question not found',
        status: false,
      });
    }

    // 👉 Save comment
    const newComment = await commentDB.create({
      question_id: questionId,
      comment,
      user: new mongoose.Types.ObjectId(user),
    });

  res.status(201).send({
  message: 'Comment created successfully',
  status: true,
  data: newComment,
});

// ✅ Run email in background (won't block response)
setImmediate(async () => {
  try {
    if (question.user?.email) {
      await sendEmail({
        to: question.user.email,
        subject: 'New Comment on Your Question',
        html: `
          <p>Hello ${question.user.displayName || 'User'},</p>
          <p>Your question <strong>${question.title}</strong> has received a new comment:</p>
          <blockquote style="color: #555; border-left: 3px solid #19376d; padding-left: 10px; margin: 10px 0;">
            ${comment}
          </blockquote>
          <p><a href="https://bitkit-green.vercel.app">Click here</a> to check it out on the website.</p>
          <br/>
          <p>— Team BiTKiT</p>
        `,
      });
    }
  } catch (emailErr) {
    console.error('Error sending notification email:', emailErr.message);
    // Optional: Log email failures somewhere
  }
});


  } catch (err) {
    console.error("Error creating comment:", err);
    res.status(500).send({
      message: 'Error creating comment',
      status: false,
      error: err.message,
    });
  }
});

module.exports = router;
