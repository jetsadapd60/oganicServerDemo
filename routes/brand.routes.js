const express = require('express');
const router = express.Router();
const { create, load } = require('../controllers/brand-controllers');
const { uploadImageBrand } = require('../middleware/multer');
const { isAdmin }  = require('../middleware/isAdmin');
const { checkLogin } = require('../middleware/passport')

router.route('/')
    .post([checkLogin, isAdmin], uploadImageBrand.single('imageFile'), create )
    .get(load)

module.exports = router;