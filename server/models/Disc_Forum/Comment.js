const mongoose = require("mongoose");
const {forumConn}=require("../../config/connectDB")

const commentSchema = new mongoose.Schema(
  {
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Questions",
    },
    comment: String,
    created_at: {
      type: Date,
      default: Date.now,
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
}

  },
  { timestamps: true }
);

module.exports = forumConn.model("Comments", commentSchema);
