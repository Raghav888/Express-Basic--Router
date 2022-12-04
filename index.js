const express = require('express');

const app = express();

const productData = {
 products: [
    {
      id: 1,
      name: "Clothes"
    },
    {
      id: 2,
      name: "Jeans"
    }
  ]
}

app.get('/', (req, res) => {
  res.send('Hello Product Home Page')
});

app.get('/products', (req, res) => {

  const dataToSend = productData.products.map(item => `<li>${item.name}</li>`).join('\n');
  res.send(dataToSend);
})



app.listen(3000, () => {
  console.log('server started');
});
