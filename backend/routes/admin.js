// routes/admin.js
const express = require("express");
const router = express.Router();
const { admin } = require("../firebase/admin");
const authenticate = require("../middlewares/auth");  // use thw middlewares to authentic the token

// only admin can use this port.
router.post("/set-admin", authenticate, async (req, res) => {
  // determine the admin
  if (!req.user.admin) {
    return res.status(403).json({ error: "No permission" });
  }

  const { uid } = req.body;
  if (!uid) {
    return res.status(400).json({ error: "Missing uid" });
  }

  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    res.json({ message: `User ${uid} is now an admin.` });
  } catch (error) {
    console.error("Error setting admin claim:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/unset-admin", authenticate, async (req, res) => {
  if (!req.user.admin) {
    return res.status(403).json({ error: "No permission" });
  }

  const { uid } = req.body;
  if (!uid) {
    return res.status(400).json({ error: "Missing uid" });
  }

  try {
    await admin.auth().setCustomUserClaims(uid, {});
    res.json({ message: `User ${uid} is no longer an admin.` });
  } catch (error) {
    console.error("Error removing admin claim:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
