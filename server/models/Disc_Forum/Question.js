const mongoose = require("mongoose");
const {forumConn}=require("../../config/connectDB")

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  body: {
    type: String,
    required: [true, 'Description is required'],
  },
  tags: {
    type: [String],
    required: [true, 'Tags are required'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  votes: {
    type: Number,
    default: 0,
  },
  votedBy: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
      voteType: {
        type: String,
        enum: ["upvote", "downvote"],
      },
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = forumConn.model('Questions', questionSchema);
