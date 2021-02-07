const express = require("express");
const router = express.Router();
const { createProduct, loadAllProducts, loadProduct } = require("../controllers/product-controllers");
const { uploadImageProduct } = require('../middleware/multer');
const { isAdmin }  = require('../middleware/isAdmin');
const { checkLogin } = require('../middleware/passport')

router.route('/')
    // create product item
    .post([checkLogin, isAdmin], uploadImageProduct.array('imagesFile', 4), createProduct)
    // .post((req, res) => {
    //     console.log(req.body)
    // } )
    // load products
    .get( loadAllProducts)


// load product
router.get('/:id',[checkLogin, isAdmin], (loadProduct))


module.exports = router;
