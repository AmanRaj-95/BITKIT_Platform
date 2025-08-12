const express = require('express');

const indexRoute = require('./routes/Disc_Forum/index');
const questionRoute = require('./routes/Disc_Forum/Question');
const answerRoute = require('./routes/Disc_Forum/Answer');
const commentRoute = require('./routes/Disc_Forum/Comment');
const voteRoute = require('./routes/Disc_Forum/vote');
const authRoutes = require('./routes/Disc_Forum/authRoutes');
const tagsRoute = require('./routes/Disc_Forum/tags');
const deleteQnRoute = require('./routes/Disc_Forum/DeleteQn'); // Importing DeleteQn route
const developerRoute = require('./routes/Academics/developerRoute');
const cors = require("cors");

const usersRoute = require("./routes/Buy_Sell/usersRoute");
const productsRoute = require("./routes/Buy_Sell/productsRoutes");
const bidsRoute = require("./routes/Buy_Sell/bidsRoute");
const notificationsRoute = require("./routes/Buy_Sell/notificationsRoute");
const deleteAnswerRoute = require('./routes/Disc_Forum/DeleteAns'); // Importing DeleteAns route
const deleteCommentRoute = require('./routes/Disc_Forum/DeleteComments'); // Importing DeleteComments route
const blockUserRoute = require('./routes/blockUser'); // Importing blockUser route
const unBlockUserRoute = require('./routes/unBlockUser'); // Importing unBlockUser

const { forumConn, academicsConn } = require('./config/connectDB');
const keepAlive = require('./cron/keepRenderAwake');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://bitkit-platform.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = The CORS policy for this site does not allow access from the specified Origin: ${origin};
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Discussion Forum Routes
app.use('/api/v1/forum', indexRoute);
app.use('/api/v1/forum', questionRoute);
app.use('/api/v1/forum', answerRoute);
app.use('/api/v1/forum', commentRoute);
app.use('/api/v1/forum', voteRoute);
app.use('/api/v1/forum', authRoutes);
app.use('/api/v1/forum', tagsRoute);
app.use('/api/v1/forum', deleteQnRoute);
app.use('/api/v1/forum', deleteAnswerRoute);
app.use('/api/v1/forum', deleteCommentRoute);
app.use('/api/v1', blockUserRoute);
app.use('/api/v1', unBlockUserRoute);

// Academics Routes
app.use('/api/v1/academics', developerRoute);

// Buy/Sell Routes
app.use("/api/v1/buy-sell/users", usersRoute);
app.use("/api/v1/buy-sell/products", productsRoute);
app.use("/api/v1/buy-sell/bids", bidsRoute);
// app.use("/api/v1/buy-sell/notifications", notificationsRoute);

app.use('/api/v1/academics', developerRoute);

app.listen(PORT, () => {
  console.log(Server is listening on http://localhost:${PORT});
  keepAlive();
});
