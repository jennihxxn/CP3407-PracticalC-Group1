const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const admin = require('../firebase/admin'); // Firebase Admin SDK

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "CP3501ASDGPo!",
  database: "gym_management",
});

// middleware used to verify Firebase idToken
async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const idToken = authHeader.startsWith('Bearer ') ? authHeader.split('Bearer ')[1] : null;
    if (!idToken) return res.status(401).json({ error: 'No idToken provided' });

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.uid = decodedToken.uid;
    next();
  } catch (err) {
    console.error('Authentication error:', err);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// GET /api/user/me get current user's info
router.get('/me', authenticate, async (req, res) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.execute(
      'SELECT StudentID, FirstName, LastName, Email, phone, FirebaseUID FROM student WHERE FirebaseUID = ?',
      [req.uid]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });

    res.json(rows[0]);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (connection) connection.release();
  }
});

// PUT /api/user/me update current user's info
router.put('/me', authenticate, async (req, res) => {
  const { FirstName, LastName, Email, phone } = req.body;
  if (!FirstName && !LastName && !Email && !phone) {
    return res.status(400).json({ error: 'No fields to update' });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    // search
    //  StudentID
    const [rows] = await connection.execute('SELECT StudentID FROM student WHERE FirebaseUID = ?', [req.uid]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
    const studentId = rows[0].StudentID;

    const fields = [];
    const values = [];
    if (FirstName) {
      fields.push('FirstName = ?');
      values.push(FirstName);
    }
    if (LastName) {
      fields.push('LastName = ?');
      values.push(LastName);
    }
    if (Email) {
      fields.push('Email = ?');
      values.push(Email);
    }
    if (phone) {
      fields.push('phone = ?');
      values.push(phone);
    }
    values.push(studentId);

    const sql = `UPDATE student SET ${fields.join(', ')} WHERE StudentID = ?`;
    const [result] = await connection.execute(sql, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User updated successfully' });
  } catch (err) {
    console.error('Database error:', err);
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Email or phone already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (connection) connection.release();
  }
});

module.exports = router;

