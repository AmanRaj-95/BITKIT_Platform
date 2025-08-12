const mongoose=require("mongoose");
const {forumConn}=require("../../config/connectDB")

const answerSchema=new mongoose.Schema({

    question_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Questions'
    },

    answer:String,

    created_at:{
        type:Date,
        default:Date.now
    },
    user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Users"
},
    comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comments'
    },
    votes: { type: Number, default: 0 },
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
},{timestamps:true});

module.exports=forumConn.model('Answers',answerSchema);

