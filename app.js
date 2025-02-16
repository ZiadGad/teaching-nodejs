const express = require('express');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const reviewRouter = require('./routes/reviewRoutes');
// const cartRouter = require('./routes/cartRoutes');

const app = express();

app.use('/users', userRouter);

app.use('/products', productRouter);

app.use('/reviews', reviewRouter);

// app.use('/cards', cartRouter);

app.listen(3000, () => {
  console.log('server is running');
});

// TODO: Read products.json to Create GetAllProducts controller
// TODO: Create your own users.json, reviews.json and create their controllers
