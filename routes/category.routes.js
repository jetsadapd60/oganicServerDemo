const express = require('express');
const router = express.Router();
const { create, update, load } = require('../controllers/category-controllers');
const { uploadImageCategory } = require('../middleware/multer');
const { isAdmin }  = require('../middleware/isAdmin');
const { checkLogin } = require('../middleware/passport')

router.route('/')
    .post([checkLogin, isAdmin], uploadImageCategory.single('imageFile'), create)
    .get(load)
    .patch(update)

module.exports = router;