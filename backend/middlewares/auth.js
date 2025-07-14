// middlewares/auth.js
const { admin } = require("../firebase/admin");

async function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Didn't provide the Token" });
  }

  const idToken = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; //  user.uid, user.email, 
    next();
  } catch (error) {
    console.error("Token authentication failed：", error);
    res.status(401).json({ error: "Invalid Token" });
  }
}

module.exports = authenticate;

