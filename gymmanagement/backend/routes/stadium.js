// routes/stadium.js
const express = require("express");
const router = express.Router();
const { db } = require("../firebase/admin");

// response 'add stadium'
router.post("/", async (req, res) => {
  console.log("req.body:", req.body);
  const { name, location, availableSlots, availableNumbers} = req.body;

  const customId = name.toLowerCase().replace(/\s+/g, "_");

  try {
    const docRef = db.collection("stadiums").doc(customId);
    const data = {
        name,
        location,
        createdAt: new Date(),
    };

    if (availableSlots !== undefined) data.availableSlots = availableSlots;
    else data.availableSlots = 0;

    if (availableNumbers !== undefined) data.availableNumbers = availableNumbers;
    else data.availableNumbers = 0;

    console.log("Saving data:", data); 

    await docRef.set(data);
    res.status(200).json({ id: customId, message: "The stadium added " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

// response 'get all stadiums'
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("stadiums").get();
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// response "get a stadium info"
router.get("/:id", async (req, res) => {
  const stadiumId = req.params.id;

  try {
    const doc = await db.collection("stadiums").doc(stadiumId).get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Stadium not found" });
    }

    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//response update the stadium
router.put("/:id", async (req, res) => {
  const stadiumId = req.params.id;
  const updateData = req.body;

  try {
    const stadiumRef = db.collection("stadiums").doc(stadiumId);
    const doc = await stadiumRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Stadium not found" });
    }

    await stadiumRef.update(updateData);
    res.status(200).json({ message: "Stadium updated successfully" });
  } catch (err) {
    console.error("Error updating stadium:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// response delete stadium
router.delete("/:id", async (req, res) => {
  const stadiumId = req.params.id;

  try {
    const stadiumRef = db.collection("stadiums").doc(stadiumId);
    const doc = await stadiumRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Stadium not found" });
    }

    await stadiumRef.delete();
    res.status(200).json({ message: `Stadium '${stadiumId}' deleted successfully` });
  } catch (err) {
    console.error("Error deleting stadium:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
