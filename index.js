const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');

require('./models/User');
require('./services/passport');

// IMPORTANT!!!
// DELETE this before production build.
// Allows use of localhost without SSL for testing of OAuth in development
require('https').globalAgent.options.rejectUnauthorized = false;

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

// Cookie handling
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
