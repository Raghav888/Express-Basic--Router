const express = require('express');

const app = express();

// to read json body we need a middleware for post method
const bodyParser = require('body-parser');

const products = require('./routers/product.router');

// HOME page GET method
app.get('/', (req, res) => {
  res.send('Hello Product Home Page')
});

// Router is also an middleware
// Here we are saying to express to use products route when '/products' is hit
app.use('/products', products);

app.listen(3000, () => {
  console.log('server started');
});
