const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  oauthId: String,
  preference: {
    type: String,
    enum: ['email', 'text'],
  },
  timezone: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
