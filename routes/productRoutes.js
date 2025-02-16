const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getProduct);

module.exports = router;
