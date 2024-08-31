// authController.js

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/UserSchema.js');


const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// List all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users); // Return the list of users as JSON
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Register user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 8);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            role: role || 'User',
        });

        await newUser.save();

        res.status(201).json({ message: 'Registration Successful' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ auth: false, token: null, message: 'No user found. Please register first.' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ auth: false, token: null, message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: '24h' });

        res.status(200).json({ auth: true, token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ auth: false, token: null, message: 'Internal Server Error' });
    }
});

// Get user info
router.get('/userInfo', async (req, res) => {
    try {
        const token = req.headers['x-access-token'];

        if (!token) {
            return res.status(401).json({ auth: false, message: 'No token provided' });
        }

        // Verify token
        const decoded = jwt.verify(token, config.secret);

        // Find user by ID
        const user = await User.findById(decoded.id, { password: 0 }); // Exclude password from response
        if (!user) {
            return res.status(404).json({ message: 'No user found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user info:', error);
        res.status(500).json({ auth: false, message: 'Failed to authenticate token' });
    }
});

module.exports = router;
