// routes/auth.js

const express = require("express");
const router = express.Router();
const admin = require("../firebase/admin");
const mysql = require("mysql2/promise");
const bcrypt = require('bcrypt');

// MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "CP3501ASDGPo!",
  database: "gym_management",
});

// ---------- Register ----------
router.post("/register", async (req, res) => {
  const idToken = req.headers.authorization?.split(" ")[1];

  if (!idToken) {
    return res.status(401).json({ error: "Missing token" });
  }

  try {
    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const firebaseUID = decodedToken.uid;
    const email = decodedToken.email;

    const { firstName, lastName, studentID, phone, password} = req.body;

    const passwordHash = await bcrypt.hash(password, 12);

    if (!firstName || !lastName || !studentID || !phone || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Prevent duplicate studentID or email
    const [rows] = await pool.query(
      "SELECT * FROM student WHERE studentID = ? OR email = ?",
      [studentID, email]
    );

    if (rows.length > 0) {
      return res.status(409).json({ error: "Student ID or email already registered" });
    }

    // Save to MySQL
    await pool.query(
      "INSERT INTO student (firstName, lastName, studentID, phone, email, passwordHash, firebaseUID) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [firstName, lastName, studentID, phone, email, passwordHash, firebaseUID]
    );

    return res.status(200).json({ message: "User registered successfully", email });

  } catch (error) {
    console.error("Register failed:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// ---------- Login ----------
router.post("/login", async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) {
    return res.status(400).json({ error: "Missing idToken" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    //const match = await bcrypt.compare(password, hash);
    if (!decodedToken.email_verified) {
      return res.status(403).json({ error: "Email not verified" });
    }

    const uid = decodedToken.uid;
    const email = decodedToken.email || "";

    // Get role from Firestore (optional)
    /*
    const userRef = db.collection("users").doc(uid);
    const userSnap = await userRef.get();

    const role = userSnap.exists ? userSnap.data().role : "user";
    */
    return res.status(200).json({
      message: "Login successful",
      uid,
      email,
      //role,
    });

  } catch (error) {
    console.error("Login failed:", error);
    return res.status(401).json({ error: "Invalid token" });
  }

});

module.exports = router;
