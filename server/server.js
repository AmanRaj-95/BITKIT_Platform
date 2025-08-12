const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// app.get('/health', (req, res) => {
//   res.status(200).send('Server is alive!');
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);

  // Start cron job *after* server has started
  // const keepAlive = require('./cron/keepRenderAwake');
  // keepAlive();
});

