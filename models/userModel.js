const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema
const userSchema = new Schema({
  name: {type: String},
  email: {type: String, unique: true},
  password: {type: String},
});

// User model
const User = mongoose.model("User", userSchema);

module.exports = User;