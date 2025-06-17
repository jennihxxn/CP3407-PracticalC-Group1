// routes/auth.js

const express = require("express");
const router = express.Router();
const { admin, db } = require("../firebase/admin");

// login and synchronize data
router.post("/login", async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) {
    return res.status(400).json({ error: "Missing idToken" });
  }

  try {
    // authentic Firebase ID Token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const email = decodedToken.email || "";
    const name = decodedToken.name || "";

    const userRef = db.collection("users").doc(uid);
    const userSnap = await userRef.get();

    // If user are not exist then add it to Firestore
    if (!userSnap.exists) {
      await userRef.set({
        uid,
        email,
        name,
        role: "user", // default name
        createdAt: new Date()
      });
    }

    res.status(200).json({
      message: "Login successful",
      uid,
      email,
      role: userSnap.exists ? userSnap.data().role : "user",
    });

  } catch (error) {
    console.error("Login failed:", error);
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = router;
