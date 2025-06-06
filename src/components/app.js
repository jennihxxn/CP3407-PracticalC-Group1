const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const { nanoid } = require('nanoid');
const app = express();
const port = 3000;

//initiallize the firestore
const serviceAccount = require('./firebaseKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const sessionCollection = db.collection('sessions');

app.use(bodyParser.json());

// get all session
app.get('/sessions', async (req, res) => {
  const snapshot = await sessionCollection.get();
  const sessions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(sessions);
});

// post a new sessions
app.post('/sessions', async (req, res) => {
  const { name, email, time } = req.body;

  if (!name || !email || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newSession = {
    name,
    email,
    time,
    createdAt: new Date().toISOString()
  };

  const docRef = await sessionCollection.add(newSession);
  res.status(201).json({ message: 'Session booked', id: docRef.id, ...newSession });
});

// delete session
app.delete('/sessions/:id', async (req, res) => {
  const { id } = req.params;
  const docRef = sessionCollection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) {
    return res.status(404).json({ error: 'Session not found' });
  }

  await docRef.delete();
  res.json({ message: 'Session deleted' });
});

// get users' list
app.get('/users', async (req, res) => {
  try {
    const snapshot = await db.collection('sessions').get();
    const usersMap = new Map();

    snapshot.docs.forEach(doc => {
      const { name, email } = doc.data();
      if (email && !usersMap.has(email)) {
        usersMap.set(email, { name, email });
      }
    });

    const users = Array.from(usersMap.values());
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
