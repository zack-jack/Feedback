const express = require('express');
const mongoose = require('mongoose');

require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
