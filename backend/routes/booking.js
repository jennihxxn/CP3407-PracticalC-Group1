const express = require('express');
const router = express.Router();
const mysql = require("mysql2/promise");
const admin = require('../firebase/admin'); // firebase admin sdk

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "CP3501ASDGPo!",
  database: "gym_management",
});

// add booking
router.post('/', async (req, res) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1] || req.body.idToken;
  if (!idToken) {
    return res.status(401).json({ error: 'No idToken provided' });
  }

  const { FacilityID, Date, StartTime, EndTime } = req.body;
  if (!FacilityID || !Date || !StartTime || !EndTime) {
    return res.status(400).json({ error: 'FacilityID, Date, StartTime and EndTime are required' });
  }

  let connection;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    connection = await pool.getConnection();

    const [rows] = await connection.execute('SELECT StudentID FROM student WHERE FirebaseUID = ?', [uid]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    const studentID = rows[0].StudentID;

    const insertSql = `
      INSERT INTO facilityBooking (StudentID, FacilityID, Date, StartTime, EndTime)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await connection.execute(insertSql, [studentID, FacilityID, Date, StartTime, EndTime]);

    res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
  } catch (err) {
    console.error('Booking error:', err);
    if (err.code && err.code.startsWith('auth/')) {
      return res.status(401).json({ error: 'Invalid or expired idToken' });
    }
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (connection) connection.release();
  }
});

//  get all facility (used for admin) 
/*
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("facility").get();
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}); */

// get a booking by StudentId
router.put("/:id", async (req, res) => {
  const bookingId = req.params.id;
  const { Date, StartTime, EndTime, FacilityID } = req.body;

  if (!Date && !StartTime && !EndTime && !FacilityID) {
    return res.status(400).json({ error: "Date, StartTime, EndTime or FacilityID required to update booking" });
  }

  let connection;
  try {
    connection = await pool.getConnection();

    const fields = [];
    const values = [];

    if (Date) {
      fields.push("Date = ?");
      values.push(Date);
    }
    if (StartTime) {
      fields.push("StartTime = ?");
      values.push(StartTime);
    }
    if (EndTime) {
      fields.push("EndTime = ?");
      values.push(EndTime);
    }
    if (FacilityID) {
      fields.push("FacilityID = ?");
      values.push(FacilityID);
    }

    values.push(bookingId);
    const updateSql = `UPDATE facilityBooking SET ${fields.join(", ")} WHERE BookingID = ?`;
    const [result] = await connection.execute(updateSql, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json({ message: "Booking updated successfully" });
  } catch (err) {
    console.error("Booking update error:", err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (connection) connection.release();
  }
});

// delete booking
router.delete("/:id", async (req, res) => {
  const bookingId = req.params.id;

  let connection;
  try {
    connection = await pool.getConnection();

    const deleteSql = "DELETE FROM facilityBooking WHERE BookingID = ?";
    const [result] = await connection.execute(deleteSql, [bookingId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json({ message: `Booking ${bookingId} deleted successfully` });
  } catch (err) {
    console.error("Booking deletion error:", err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (connection) connection.release();
  }
});

module.exports = router;
