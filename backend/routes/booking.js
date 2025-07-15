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

router.post('/add', async (req, res) => {
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

module.exports = router;
