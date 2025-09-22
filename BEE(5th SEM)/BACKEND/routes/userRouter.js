const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const { signup, signin } = require('../controllers/usercontroller');


router.post('/signin',signin);
router.post('/signup',signup);

module.exports = router;
