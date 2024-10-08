const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

const connectToDatabase = async () => {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('New MongoDB connection established');
  } else {
    console.log('Using existing MongoDB connection');
  }
};

// Route to get all documents from the collection
app.get('/getjsondata', async (req, res) => {
  try {
    await connectToDatabase();
    const db = mongoose.connection.db;
    console.log(db);
    const collection = db.collection('JsonData');
    const documents = await collection.find({}).toArray(); // Get all documents
    const sanitizedDocuments = documents.map(({ _id, ...rest }) => rest);
    if (documents.length === 0) {
      console.log('No documents found');
      return res.status(200).json([]);
    }
    res.status(200).json(sanitizedDocuments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching documents', error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
