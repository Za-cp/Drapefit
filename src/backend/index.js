const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

const db = require('./config/db'); // database connection
const User = require('./models/userSchema');
const uploadRoute = require('./routes/upload');
const fitQuizRoutes = require('./routes/fitquiz');

// Load environment variables
dotenv.config();

// Middlewares
app.use(bodyParser.json());
app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [process.env.FRONTEND_URL];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));
app.use('/uploads', express.static('uploads'));
app.use('/api/upload', uploadRoute);
app.use('/api/fitquiz', fitQuizRoutes); // ✅ correct route: /api/fitquiz

// Test route
app.get('/', (req, res) => {
    res.json({ message: "okay it works backend" });
});

// Register (SignUp) route
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists!' });
        }

        const newUser = new User({
            username: name,
            email: email,
            password: password,
        });

        await newUser.save();
        res.status(200).json({ message: 'Signup successful!' });

    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error in register' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found. Please signup first!' });
        }

        if (existingUser.password !== password) {
            return res.status(400).json({ message: 'Invalid password!' });
        }

        res.status(200).json({ message: 'Login successful!' });

    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Error in login' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Serve the uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
