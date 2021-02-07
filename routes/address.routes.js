const express = require('express');
const router = express.Router();
const address = require('../controllers/address-controllers');

router.route('/:userId')
    .post(address.createAddress)
    .get(address.loadAddress)
    .put(address.delete);

router.get('/',address.loadAddresses);


module.exports = router;