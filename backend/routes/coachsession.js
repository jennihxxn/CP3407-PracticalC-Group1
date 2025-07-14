const express = require("express");
const router = express.Router();
const { db } = require("../firebase/admin");

// Add a coach booking
router.post("/", async (req, res) => {
  const { coachId, userId, timeSlot, paymentId, remark } = req.body;

  if (!coachId || !userId || !timeSlot || !paymentId) {
    return res.status(400).json({ error: "coachId, userId, paymentId and timeSlot are required" });
  }

  try {
    const newBooking = {
      coachId,
      userId,
      timeSlot, 
      paymentId,          
      remark: remark || "",
      createdAt: new Date(),
    };

    const docRef = await db.collection("coachsession").add(newBooking);
    res.status(201).json({ id: docRef.id, message: "Coach Booking created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all coach bookings
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("coachsession").get();
    const coachbookings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(coachbookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a coach booking by ID
router.get("/:id", async (req, res) => {
  const coachbookingId = req.params.id;

  try {
    const doc = await db.collection("coachsession").doc(coachbookingId).get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a coach booking
router.put("/:id", async (req, res) => {
  const bookingId = req.params.id;
  const updateData = req.body;

  try {
    const docRef = db.collection("coachsession").doc(bookingId);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Booking not found" });
    }

    await docRef.update(updateData);
    res.status(200).json({ message: "Booking updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a coach booking
router.delete("/:id", async (req, res) => {
  const bookingId = req.params.id;

  try {
    const docRef = db.collection("coachsession").doc(bookingId);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Booking not found" });
    }

    await docRef.delete();
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
