const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const QuestionDB = require('../../models/Disc_Forum/Question');
const authMiddleware = require('../../middlewares/authMiddleware');

router.post('/questions', authMiddleware, async (req, res) => {
  try {
    const questionData = new QuestionDB({
      title: req.body.title,
      body: req.body.body,
      tags: req.body.tags,
      user: new mongoose.Types.ObjectId(req.body.user), // ✅ convert user to ObjectId
    });

    console.log("Tags received:", req.body.tags);

    const doc = await questionData.save();
    res.status(201).send({
      message: 'Question created successfully',
      status: true,
      data: doc,
      
    });
  } catch (err) {
    res.status(500).send({
      message: 'Error creating question',
      status: false,
      error: err.message,
    });
  }
});


router.get("/questions/:id", async (req, res) => {
  try {
    const questionId = new mongoose.Types.ObjectId(String(req.params.id));

    const questionDetails = await QuestionDB.aggregate([
      {
        $match: { _id: questionId },
      },

      // 👇 Join the user who posted the question
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $unwind: {
          path: "$userDetails",
          preserveNullAndEmptyArrays: true,
        },
      },

      // 👇 Join answers with user info
      {
        $lookup: {
          from: "answers",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "userDetails",
              },
            },
            {
              $unwind: {
                path: "$userDetails",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $project: {
                _id: 1,
                user: 1,
                answer: 1,
                question_id: 1,
                created_at: 1,
                votes: 1,
                votedBy: 1,
                userDetails: {
    displayName: "$userDetails.displayName",
    photoURL: "$userDetails.photoURL"
  }
              },
            },
          ],
          as: "answerDetails",
        },
      },
      

      // 👇 Join comments (optional user info)
      {
        $lookup: {
          from: "comments",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "userDetails",
              },
            },
            {
              $unwind: {
                path: "$userDetails",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $project: {
                _id: 1,
                question_id: 1,
                user: 1,
                comment: 1,
                created_at: 1,
                "userDetails.displayName": 1,
                "userDetails.photoURL": 1,
              },
            },
          ],
          as: "comments",
        },
      },

      // 👇 Project final structure
      {
        $project: {
          title: 1,
          body: 1,
          tags: 1,
          views: 1,
          votes: 1,
          createdAt: "$created_at",
          answerDetails: 1,
          comments: 1,
           userDetails: {
      displayName: "$userDetails.displayName",
      photoURL: "$userDetails.photoURL"
    }
        },
      },
    ]);
    // console.log("Question Details:", questionDetails);
    console.log("Comments:", questionDetails[0]?.comments);
    console.log("User Details:", questionDetails[0]?.userDetails);

    // Final formatting (if needed)
    if (questionDetails.length > 0) {
      res.status(200).send(questionDetails[0]);
    } else {
      res.status(404).send({ message: "Question not found" });
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(400).send({ message: "Error fetching question", error: err.message });
  }
});





router.get("/questions", async (req, res) => {
  const error = {
    message: "Error in retrieving questions",
    error: "Bad request",
  };

  QuestionDB.aggregate([
    // 👇 Join user data for the question author
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userDetails",
      },
    },
    {
      $unwind: {
        path: "$userDetails",
        preserveNullAndEmptyArrays: true,
      },
    },

    // 👇 Join all comments for the question
    {
      $lookup: {
        from: "comments",
        let: { question_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$question_id", "$$question_id"],
              },
            },
          },
          {
            $project: {
              _id: 1,
              comment: 1,
              created_at: 1,
            },
          },
        ],
        as: "comments",
      },
    },

    // 👇 Join all answers for the question
    {
      $lookup: {
        from: "answers",
        let: { question_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$question_id", "$$question_id"],
              },
            },
          },
          {
            $project: {
              _id: 1,
            },
          },
        ],
        as: "answerDetails",
      },
    },

    // 👇 Final projection
    {
      $project: {
        __v: 0,
        // "userDetails._id": 0,
        "userDetails.firebaseUid": 0,
        "userDetails.email": 0,
        "userDetails.updatedAt": 0,
        "userDetails.createdAt": 0,
        "user": 0, // optional: remove original user ObjectId if not needed
      },
    },
  ])
    .exec()
    .then((questionDetails) => {
     res.status(200).send(
  questionDetails.map((q) => {
    // console.log("🔍 userDetails for question:", q.userDetails);
    return {
      ...q,
      user: {
        displayName: q.userDetails?.displayName || "Unknown",
        photoURL: q.userDetails?.photoURL || null,
        userId: q.userDetails?._id?.toString() || null,
      },
    };
  })
);
    })
    .catch((e) => {
      console.log("Error: ", e);
      res.status(400).send(error);
    });
});



// Route to update view count of a question

router.put('/questions/:id/view', async (req, res) => {
  try {
    const question = await QuestionDB.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } }, // 👈 increment view count
      { new: true }
    );
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: "Error updating views", error });
  }
});


// GET /api/v1/forum/questions/tag/:tag
router.get("/questions/tag/:tag", async (req, res) => {
  const { tag } = req.params;

  try {
    const questions = await QuestionDB.aggregate([
      // 👇 Filter questions that contain the tag
      {
        $match: {
          tags: tag,
        },
      },

      // 🔁 Same pipeline as your /questions route
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $unwind: {
          path: "$userDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "comments",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                comment: 1,
                created_at: 1,
              },
            },
          ],
          as: "comments",
        },
      },
      {
        $lookup: {
          from: "answers",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
              },
            },
          ],
          as: "answerDetails",
        },
      },
      {
        $project: {
          __v: 0,
          "userDetails._id": 0,
          "userDetails.firebaseUid": 0,
          "userDetails.email": 0,
          "userDetails.updatedAt": 0,
          "userDetails.createdAt": 0,
          "user": 0,
        },
      },
    ]);

    res.status(200).send(
      questions.map((q) => ({
        ...q,
        user: {
          displayName: q.userDetails?.displayName || "Unknown",
          photoURL: q.userDetails?.photoURL || null,
        },
      }))
    );
  } catch (e) {
    console.log("❌ Error in tag-based aggregation:", e);
    res.status(500).json({ message: "Internal Server Error", error: e.message });
  }
});


module.exports = router;



