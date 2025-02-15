const express = require('express');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const cartRouter = require('./routes/cartRoutes');

const app = express();

app.use('/users', userRouter);

app.use('/products', productRouter);

app.use('/reviews', reviewRouter);

app.use('/cards', cartRouter);

app.listen(3000, () => {
      console.log('server is running');
});

// TODO: Complete your controllers
// TODO: create you text files and read/write it with sunc and async ways
