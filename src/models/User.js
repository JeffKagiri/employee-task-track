// src/models/User.js
const mongoose = require('mongoose');

// simple user model for authentication and task ownership
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  // role can be extended later, keep as 'employee' for now
  role: {
    type: String,
    default: 'employee'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
