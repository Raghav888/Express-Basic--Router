const express = require('express');

const router = express.Router()


const productData = {
  products: [
    {
      id: "1",
      name: "Clothes"
    },
    {
      id: "2",
      name: "Jeans"
    }
  ]
}

// GET method to get all data
// The endpoint is /products
router.route('/')
.get((req, res) => {
  res.json(productData.products);
})
// This endpoint will add data to backend. Post method.
.post((req, res) => {
  const { products } = req.body; //req.body contains the data that user sent
  console.log(products);
  res.status(201).json({ echo: "success", product });
})


// GET method to get specfic data with help of ID
router.route('/:id')
.get((req, res) => {
  const { id } = req.params; // destructing the req here. 
  // :id in route says that in req.params we have id as key value pair from 
  //client
  // so here we destructed it to take id from req.params
  const product = productData.products.find(product => product.id === id);
  product ? res.json({ product }) : res.status(404).json({ message: "no product" });

})
// POST method to update the product
.post((req, res) => {
  const { id } = req.params;
  const { products } = req.body; //req.body contains the data that user sent
  const currentProduct = productData.products.find(product => product.id === id);
  products = { ...currentProduct, ...products }
  console.log(products);
  res.status(201).json({ echo: "success", product });
})


module.exports = router