const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require("morgan");
const connectDB = require('./config/db');

dotenv.config({ path: "./config/.env" });

const app = express();
app.use(morgan("tiny"));

// Middlewares

// Routes
app.use("/api", require("./routes/auth"))




// Server configurations
const PORT = process.env.PORT || 8000;
app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server listening on port: ${PORT}`)
});
