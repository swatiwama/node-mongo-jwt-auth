const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName:  { type: String, required: true, trim: true },
  email:     { type: String, required: true, unique: true, lowercase: true, trim: true },
  username:  { type: String, required: true, unique: true, trim: true },
  password:  { type: String, required: true },
  credits:   { type: Number, default: 5 }, // 5 free credits on signup
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
