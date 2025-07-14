// routes/facility.js
const express = require("express");
const router = express.Router();
const { db } = require("../firebase/admin");

// add facility
router.post("/", async (req, res) => {
  console.log("req.body:", req.body);
  const { facilityId, name, capacity, availableSlots, remark } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const customId = name.toLowerCase().replace(/\s+/g, "_");

  try {
    const docRef = db.collection("facility").doc(customId);
    const data = {
      name,
      facilityId: facilityId !== undefined ? facilityId : "",
      capacity: capacity !== undefined ? capacity : "One Adult",
      createdAt: new Date(),
      remark: remark !== undefined ? remark : null,
      availableSlots: availableSlots !== undefined ? availableSlots : 0,
    };

    console.log("Saving data:", data);

    await docRef.set(data);
    res.status(200).json({ id: customId, message: "The new facility added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get all facility
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("facility").get();
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get a facility by id
router.get("/:id", async (req, res) => {
  const equipmentId = req.params.id;

  try {
    const doc = await db.collection("equipments").doc(equipmentId).get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Equipment not found" });
    }

    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update equipment
router.put("/:id", async (req, res) => {
  const equipmentId = req.params.id;
  const updateData = req.body;

  try {
    const equipmentRef = db.collection("equipments").doc(equipmentId);
    const doc = await equipmentRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Equipment not found" });
    }

    await equipmentRef.update(updateData);
    res.status(200).json({ message: "Equipment updated successfully" });
  } catch (err) {
    console.error("Error updating record:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// delete equipment
router.delete("/:id", async (req, res) => {
  const equipmentId = req.params.id;

  try {
    const equipmentRef = db.collection("equipments").doc(equipmentId);
    const doc = await equipmentRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Equipment not found" });
    }

    await equipmentRef.delete();
    res.status(200).json({ message: `Equipment '${equipmentId}' deleted successfully` });
  } catch (err) {
    console.error("Error deleting record:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
