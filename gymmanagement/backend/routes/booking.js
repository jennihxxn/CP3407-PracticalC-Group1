const express = require("express");
const router = express.Router();
const { db } = require("../firebase/admin");

// Add a booking
router.post("/", async (req, res) => {
  const { stadiumId, userId, timeSlot, remark } = req.body;

  if (!stadiumId || !userId || !timeSlot) {
    return res.status(400).json({ error: "stadiumId, userId and timeSlot are required" });
  }

  try {
    const newBooking = {
      stadiumId,
      userId,
      timeSlot,           
      remark: remark || "",
      createdAt: new Date(),
    };

    const docRef = await db.collection("bookings").add(newBooking);
    res.status(201).json({ id: docRef.id, message: "Booking created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("bookings").get();
    const bookings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a booking by ID
router.get("/:id", async (req, res) => {
  const bookingId = req.params.id;

  try {
    const doc = await db.collection("bookings").doc(bookingId).get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a booking
router.put("/:id", async (req, res) => {
  const bookingId = req.params.id;
  const updateData = req.body;

  try {
    const docRef = db.collection("bookings").doc(bookingId);
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

// Delete a booking
router.delete("/:id", async (req, res) => {
  const bookingId = req.params.id;

  try {
    const docRef = db.collection("bookings").doc(bookingId);
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
