const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const noteRoutes = require('./routes/noteRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB (replace 'your_connection_string' with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/noteapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// JWT middleware
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' });
        req.userId = decoded.id;
        next();
    });
};

// Routes
    app.use('/api/notes', verifyToken, noteRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
