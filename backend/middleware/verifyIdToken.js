const admin = require('../firebase/admin');

const verifyIdTokenMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const idToken = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    if (!idToken) {
      return res.status(401).json({ error: "No idToken provided" });
    }

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.uid = decodedToken.uid;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired idToken" });
  }
};

module.exports = verifyIdTokenMiddleware;

