if (process.env.NODE_ENV === 'production') {
  // production mode keys
  module.exports = require('./prod');
} else {
  // development mode keys
  module.exports = require('./dev');
}
