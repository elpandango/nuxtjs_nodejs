const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const productController = require('./controllers/product');

//Routes

app.get('/products', productController.getProducts);

app.get('/products/:productId', productController.getProduct);
//
// router.get('/cart', productController.getCart);
//
// router.post('/cart', productController.postCart);
//
// router.get('/orders', productController.getOrders);
//
// router.get('/checkout', productController.getCheckout);

app.get('/my-url', (req, res, next) => {
  console.log('url requested');
  res.send({ name: 'name' });
});

app.listen(9000);
