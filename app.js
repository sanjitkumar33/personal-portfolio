// server.js

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./controller/authController'); // Adjust the path as needed
const User = require('./model/UserSchema.js');
require('dotenv').config(); // For environment variables
const app = express();
const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://sanjuzom:z9qRX07wtVw8iK2Q@cluster0.w7yd8em.mongodb.net/internmay?retryWrites=true&w=majority';
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/internmay';

// use cors
app.use(cors({
    origin: "http://localhost:3000",
}));

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));



// Use routes
app.use('/api', userRoutes);







// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Authentication API');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
});



// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
