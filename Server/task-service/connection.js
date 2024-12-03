import mongoose from 'mongoose';

const uri = process.env.ATLAS_URI || "your-mongo-db-uri";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));
