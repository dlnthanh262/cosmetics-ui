import React, { useEffect, useState } from "react";
import axios from 'axios';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";

const App = () => {

    const [ categories, setCategories ] = React.useState([]);
    const [ brands, setBrands ] = React.useState([]);
    const [ products, setProducts ] = React.useState([]);

    const fetchCategories = async () => {
        try {
          const result = await axios.get("http://localhost:8080/api/categories")
          setCategories(result.data);
        } catch (error) {
          console.error(error);
        }
    }

    const fetchBrands = async () => {
        try {
          const result = await axios.get("http://localhost:8080/api/brands")
          setBrands(result.data);
        } catch (error) {
          console.error(error);
        }
    }

    const fetchProducts = async () => {
      try {
        const result = await axios.get("http://localhost:8080/api/products")
        setProducts(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
        fetchCategories();
        fetchBrands();
        fetchProducts();
      }, []);
   
    return (
    <div className="MainDiv">
        <Header categories={categories}></Header>
        <Home 
          brands={brands} 
          products={products}
        />
        <Footer></Footer>
    </div>
)
};



export default App; 