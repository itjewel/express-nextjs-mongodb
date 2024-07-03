// routers

// routes.js

const express = require('express');
const router = express.Router();
const { getUser,dataAccount } = require('../controllers/AuthController');

router.get('/user', getUser);
router.get('/user-data', dataAccount);

module.exports = router;


