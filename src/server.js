// src/server.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// connect to DB
connectDB();

// middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

// basic health route
app.get('/', (req, res) => res.send('Employee TaskTrack API running'));

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
