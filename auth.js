const config = require('./config');
const API_KEY = config.auth.api_key

function verifyApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== API_KEY) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }
    next();
  }

module.exports = {verifyApiKey}