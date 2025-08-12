const cron = require('node-cron');
const axios = require('axios');

function keepAlive() {
  cron.schedule('*/14 * * * *', async () => {
    try {
      const res = await axios.get('https://bitkit-server-zhf8.onrender.com/health');
      console.log(`[${new Date().toLocaleTimeString()}] Ping successful:`, res.status);
    } catch (err) {
      console.error(`[${new Date().toLocaleTimeString()}] Ping failed:`, err.message);
    }
  });
}

module.exports = keepAlive;
