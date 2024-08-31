// models/userSchema.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
    role: { type: String, default: 'User' }
});

module.exports = mongoose.model('User', UserSchema);
