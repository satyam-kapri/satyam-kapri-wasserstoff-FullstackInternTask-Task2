const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

// connect to mongodb
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('MongoDB connection error:', err));

// Route to get all documents from the collection
app.get('/getjsondata', async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const collection = db.collection('JsonData'); 
    const documents = await collection.find({}, { projection: { _id: 0 } }).toArray(); // Get all documents
    res.status(200).json(documents); 
  } catch (err) {
    res.status(500).json({ message: 'Error fetching documents', error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
