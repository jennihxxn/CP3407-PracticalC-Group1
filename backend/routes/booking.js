// routes/booking.js
const express = require('express');
const router = express.Router();
const mysql = require("mysql2/promise");
const verifyIdTokenMiddleware = require('../middleware/verifyIdToken');// 导入中间件

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "CP3501ASDGPo!",
  database: "gym_management",
});

// Add booking
router.post('/', verifyIdTokenMiddleware, async (req, res) => {
  const uid = req.uid; // middleware varification

  const { FacilityID, Date, StartTime, EndTime } = req.body;
  if (!FacilityID || !Date || !StartTime || !EndTime) {
    return res.status(400).json({ error: 'FacilityID, Date, StartTime and EndTime are required' });
  }

  let connection;
  try {
    connection = await pool.getConnection();

    // search by studentID
    const [rows] = await connection.execute('SELECT StudentID FROM student WHERE FirebaseUID = ?', [uid]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    const studentID = rows[0].StudentID;

    // insert recording
    const insertSql = `
      INSERT INTO facilityBooking (StudentID, FacilityID, Date, StartTime, EndTime)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await connection.execute(insertSql, [studentID, FacilityID, Date, StartTime, EndTime]);

    res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (connection) connection.release();
  }
});

// get all bookings of current student
router.get('/me', verifyIdTokenMiddleware, async (req, res) => {
  const uid = req.uid;

  let connection;
  try {
    connection = await pool.getConnection();

    // search for studentID
    const [studentRows] = await connection.execute('SELECT StudentID FROM student WHERE FirebaseUID = ?', [uid]);
    if (studentRows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    const studentID = studentRows[0].StudentID;

    // search for all bookings
    const [bookingRows] = await connection.execute(`
      SELECT BookingID as bookingId, FacilityID, Date, StartTime, EndTime
      FROM facilityBooking
      WHERE StudentID = ?
      ORDER BY Date DESC, StartTime DESC
    `, [studentID]);

    res.json({ bookings: bookingRows });
  } catch (err) {
    console.error('Error fetching bookings for current user:', err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (connection) connection.release();
  }
});

// update the booking
router.put('/:id', verifyIdTokenMiddleware, async (req, res) => {
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

// deelete booking 
router.delete('/:id', verifyIdTokenMiddleware, async (req, res) => {
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

