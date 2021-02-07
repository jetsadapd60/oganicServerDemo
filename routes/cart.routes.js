const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { createCartItem, loadCartItem, deleteCartItem } = require('../controllers/cart-controllers');
const { isAdmin } = require('../middleware/isAdmin');
const { checkLogin } = require('../middleware/passport');
const { amountProduct } = require('../controllers/amount-product');

router.route('/')
    .post([checkLogin, isAdmin], createCartItem)
    .get([checkLogin, isAdmin], loadCartItem)
    .delete(deleteCartItem)

router.get('/amount-product', amountProduct);

module.exports = router;