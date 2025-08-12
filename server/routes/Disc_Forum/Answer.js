const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const AnswerDB = require('../../models/Disc_Forum/Answer');
const Question = require('../../models/Disc_Forum/Question');
const { sendEmail } = require('../../utils/sendEmail');
const authMiddleware = require('../../middlewares/authMiddleware');

router.post('/answers', authMiddleware, async (req, res) => {
  try {
    const { question_id, answer, user } = req.body;

    // Validation
    if (!question_id || !answer || !user) {
      return res.status(400).send({
        message: 'question_id, answer, and user ID are required',
        status: false,
      });
    }

    if (
      !mongoose.Types.ObjectId.isValid(question_id) ||
      !mongoose.Types.ObjectId.isValid(user)
    ) {
      return res.status(400).send({
        message: 'Invalid question_id or user ID',
        status: false,
      });
    }

    // Save the answer
    const answerData = new AnswerDB({
      question_id: new mongoose.Types.ObjectId(question_id),
      answer,
      user: new mongoose.Types.ObjectId(user),
    });

    const savedAnswer = await answerData.save();

    // ✅ Send response immediately
    res.status(201).send({
      message: 'Answer created successfully',
      status: true,
      data: savedAnswer,
    });

    // 🔔 Background email notification
    setImmediate(async () => {
      try {
        const question = await Question.findById(question_id).populate('user');
        if (question?.user?.email) {
          await sendEmail({
            to: question.user.email,
            subject: 'New Answer on Your Question',
            html: `
              <p>Hello ${question.user.displayName || 'User'},</p>
              <p>Your question <strong>${question.title}</strong> has received a new answer:</p>
              <blockquote style="color: #555; border-left: 3px solid #19376d; padding-left: 10px; margin: 10px 0;">
                ${answer}
              </blockquote>
              <p><a href="https://bitkit-green.vercel.app">Click here</a> to check it out on the website.</p>
              <br/>
              <p>– Team BiTKiT</p>
            `,
          });
        }
      } catch (emailErr) {
        console.error('Error sending answer notification:', emailErr.message);
      }
    });

  } catch (err) {
    console.error('Error creating answer:', err);
    res.status(500).send({
      message: 'Error creating answer',
      status: false,
      error: err.message,
    });
  }
});

module.exports = router;
