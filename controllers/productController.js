const fs = require('fs');

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/products.json`, 'utf8'),
);

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      //   products: products,
      products,
    },
  });
};

// exports.getProduct = (req, res) => {
//   const { id } = req.params;
//   //   const id = req.params.id;
//   res.status(200).json({
//     status: 'success',

//   })
// };
exports.createProduct = (req, res) => {
  res.send('creat user');
};
