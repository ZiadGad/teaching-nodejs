const express = require('express');
const router = express.Router();

// befor prodctController
router.get('/', (req, res) => {
  res.send('hello');
});
router.post('/', (req, res) => {
  res.send('create product');
});
router.patch('/', (req, res) => {
  res.send('update product');
});
router.delete('/', (req, res) => {
  res.send('no products');
});

module.exports = router;
