// model/UserSchema.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, default: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
