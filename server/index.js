
const express = require('express');

const indexRoute = require('./routes/Disc_Forum/index');
const questionRoute = require('./routes/Disc_Forum/Question');
const answerRoute = require('./routes/Disc_Forum/Answer');
const commentRoute = require('./routes/Disc_Forum/Comment');
const voteRoute = require('./routes/Disc_Forum/vote');
const authRoutes = require('./routes/Disc_Forum/authRoutes');
const tagsRoute = require('./routes/Disc_Forum/tags');
const deleteQnRoute = require('./routes/Disc_Forum/DeleteQn'); // Importing DeleteQn route
// Importing Developer route(All members of the team are developers)
const developerRoute = require('./routes/Academics/developerRoute');
const cors = require("cors");


const usersRoute = require("./routes/Buy_Sell/usersRoute");
const productsRoute = require("./routes/Buy_Sell/productsRoutes");
const bidsRoute = require("./routes/Buy_Sell/bidsRoute");
const notificationsRoute = require("./routes/Buy_Sell/notificationsRoute");
const deleteAnswerRoute = require('./routes/Disc_Forum/DeleteAns'); // Importing DeleteAns route
const deleteCommentRoute = require('./routes/Disc_Forum/DeleteComments'); // Importing Delete\
const blockUserRoute = require('./routes/blockUser'); // Importing blockUser route
const unBlockUserRoute = require('./routes/unBlockUser'); // Importing unBlockUser

// Import database connections
const { forumConn, academicsConn } = require('./config/connectDB');

// Cron job import at the top
const keepAlive = require('./cron/keepRenderAwake');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",                   
  "https://bitkit-green.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware to parse JSON
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
app.use('/api/v1/forum', deleteQnRoute); // Importing DeleteQn route
app.use('/api/v1/forum', deleteAnswerRoute); // Importing DeleteAns route
app.use('/api/v1/forum', deleteCommentRoute); // Importing DeleteComments route
app.use('/api/v1', blockUserRoute); // Importing blockUser route
app.use('/api/v1', unBlockUserRoute); // Importing unBlockUser

// Academics Routes
app.use('/api/v1/academics', developerRoute);

// Buy/Sell Routes

app.use("/api/v1/buy-sell/users", usersRoute);
app.use("/api/v1/buy-sell/products", productsRoute);
app.use("/api/v1/buy-sell/bids", bidsRoute);
// app.use("/api/v1/buy-sell/notifications", notificationsRoute);

// Importing Developer route(All members of the team are developers)
app.use('/api/v1/academics', developerRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
  // Start the cron job to keep Render alive
  keepAlive();
});
