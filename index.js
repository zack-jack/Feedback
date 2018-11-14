const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');

require('./models/User');
require('./services/passport');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
