import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import AddProductForm from "./components/product/AddProduct.jsx";
import Search from "./components/Search";
import EditProductForm from "./components/product/EditProduct";

function Home() {
  const [backendData, setBackendData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // This function allows the user to search for all products that managed by a specific scrum master
  // This function is passed down to the Search component
  const search = (type, searchTerm) => {
    const filterResults = backendData.filter((product) => {
      if (type === "scrumMaster") {
        return product.scrumMasterName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else { 
        return  product.Developers.join(" ").toLowerCase()
        .includes(searchTerm.toLowerCase());
      }
    });
    setSearchResults(filterResults);
  };
  
  // This function is passed down to the Products component
  const editProduct = (product) => {
    // Edit the product in the JSON file
    fetch("/api/product/" + product.productId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        const products = data.products.map((prod) => {
          prod.id = prod.productId;
          return prod;
        });
        setBackendData(products);
        setSearchResults(products);
      });
  }

  const addNewProduct = (product) => {
    // Add the new product to the JSON file
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        const products = data.products.map((prod) => {
          prod.id = prod.productId;
          return prod;
        });
        setBackendData(products);
        setSearchResults(products);
      });
  };

  useEffect(() => {
    // Get all the products from the JSON file
    fetch("/api",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("DATA: ", data.products);
          const products = data.products.map((prod) => {
            prod.id = prod.productId;
            return prod;
          });
          setBackendData(products);
          setSearchResults(products);
        });
  }, []);

  const editSelectedProduct = (product) => {
    setSelectedProduct(product);
  }

  

  return (
    <div>
      <Header />
      <AddProductForm addNewProduct={addNewProduct} />
      <EditProductForm editProduct={editProduct} selectedProduct={selectedProduct} />
      
      <Search search={search} />
      <Products products={searchResults} editSelectedProduct={ editSelectedProduct} />
    </div>
  );
}

export default Home;
