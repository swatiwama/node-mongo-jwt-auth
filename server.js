require('dotenv').config();
console.log("Loaded MONGO_URI =", process.env.MONGO_URI);
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();

// connect DB
connectDB();

app.use(cors());
app.use(express.json()); // body parser
app.use(express.urlencoded({ extended: true }));

// static public folder (frontend html files)
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/credits', require('./routes/credits'));

// fallback
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
