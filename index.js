const express = require('express');
// to read json body we need a middleware for post method
const bodyParser=require('body-parser');


const app = express();
// Our app will use that middleware
app.use(bodyParser.json());
// This convert body data to json



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


// HOME page GET method
app.get('/', (req, res) => {
  res.send('Hello Product Home Page')
});


// GET method to get all data
app.get('/products', (req, res) => {
  res.json(productData.products);
})

// GET method to get specfic data with help of ID

app.get('/products/:id', (req, res) => {

  const { id } = req.params; // destructing the req here. 
  // :id in route says that in req.params we have id as key value pair from 
  //client
  // so here we destructed it to take id from req.params
  const product = productData.products.find(product => product.id === id);
  product ? res.json({ product }) : res.status(404).json({ message: "no product" });

})

// This endpoint will add data to backend. Post method.
app.post('/products',(req,res)=>{
  const {products}= req.body; //req.body contains the data that user sent
  console.log(products);
  res.status(201).json({echo:"success",product});
})

// POST method to update the product

app.post('/products',(req,res)=>{
  const {id}=req.params;
  const {products}= req.body; //req.body contains the data that user sent
  const currentProduct = productData.products.find(product => product.id === id);
  products={...currentProduct,...products}
  console.log(products);
  res.status(201).json({echo:"success",product});
})



app.listen(3000, () => {
  console.log('server started');
});
