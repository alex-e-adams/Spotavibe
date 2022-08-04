const express = require('express');
// const mongoose = require('mongoose');
const Session = require('../models/Session');

const router = express.Router();

/**
 * TODO: Add conditionals to handle situations where the user
 * is not in the sessions database.
 */
router.get('/', async (req, res) => {
  try {
    const userSession = await Session.findById(req.cookies['session-id']).exec();
    if (userSession) {
      res.status(200).json({ authenticated: true, accessToken: userSession.authToken });
    } else {
      res.status(200).json({ authenticated: false });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
