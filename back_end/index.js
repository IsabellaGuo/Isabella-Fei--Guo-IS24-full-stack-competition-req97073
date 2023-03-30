const express = require('express');
const server = express();
const fs = require('fs');
server.use(express.json());

//CRUD --> Read
server.get('/api', (req, res) => {
    fs.readFile('./products.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading file');
            return;
        }

        const products = JSON.parse(data);
        res.status(200).json({ "products": products });
    });
});

//CRUD --> Create
server.post("/api", (req, res) => {
  fs.readFile("./products.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading file");
      return;
    }

    const products = JSON.parse(data);
    const newProduct = req.body;
    console.log("newProduct: ", req);
    products.push(newProduct);

    fs.writeFile("products.json", JSON.stringify(products), "utf8", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error writing file");
        return;
      }

      // res.status(200).send('Product added successfully');
      res.status(200).json({ products: products });
    });
  });
});

server.put('/api/product/:productId', (req, res) => {
  fs.readFile('./products.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
      return;
    }
    const products = JSON.parse(data);
      
    const productId = req.params.productId;
      const updatedProduct = req.body;
      console.log("updatedProduct: ", updatedProduct);
      console.log("productId: ", productId);

    const productIndex = products.findIndex(product => product.productId == productId);

    if (productIndex === -1) {
      res.status(404).send('Product not found');
      return;
    }

    products[productIndex] = updatedProduct;

    fs.writeFile('products.json', JSON.stringify(products, null, 2), 'utf8', (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing file');
        return;
      }

      res.status(200).json({ products: products });
    });
  });
});

server.get('/api/product/:productId', (req, res) => {
  fs.readFile('./products.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
      return;
    }
    const products = JSON.parse(data);
      
    const productId = req.params.productId;
      const updatedProduct = req.body;
      console.log("updatedProduct: ", updatedProduct);
      console.log("productId: ", productId);

    const product = products.find(product => product.productId == productId);

    if (!product) {
      res.status(404).send('Product not found');
      return;
    }

    res.status(200).json(product);
  });
});






const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`**************Server started on port ${PORT}***********`));