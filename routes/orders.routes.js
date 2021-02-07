const express = require('express');
const router = express.Router();
const { create } = require('../controllers/orders-controllers');
const { isAdmin }  = require('../middleware/isAdmin');
const { checkLogin } = require('../middleware/passport')

router.route('/')
    .post(create)

module.exports = router; 