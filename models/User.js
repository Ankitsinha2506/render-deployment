const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true // hashed password
  },
  isGoogleUser: {
    type: Boolean, // ✅ Proper type here
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
