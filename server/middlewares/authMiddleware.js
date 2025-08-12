// backend/middleware/verifyCollegeUser.js
const admin = require("../firebaseAdmin");

const verifyCollegeUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const email = decodedToken.email;

    if (!email.endsWith("@bitmesra.ac.in")) {
      return res.status(403).json({ error: "Access denied: Not a BIT Mesra email" });
    }

    // Attach user info to request for future use
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = verifyCollegeUser;
