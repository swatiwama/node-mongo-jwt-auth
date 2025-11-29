const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("Connecting to:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB ERROR:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
