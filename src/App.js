import React, { useEffect, useState } from "react";
import axios from 'axios';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";

const App = () => {

    const [ categories, setCategories ] = React.useState([]);
    const [ brands, setBrands ] = React.useState([]);
    const [ products, setProducts ] = React.useState([]);
    const [ latestProducts, setLatestProducts ] = React.useState([]);
    const [ hotProducts, setHotProducts ] = React.useState([]);
    const [ discountedProducts, setDiscountedProducts ] = React.useState([]);

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

    const fetchLatestProducts = async () => {
      try {
        const result = await axios.get("http://localhost:8080/api/products/latest")
        setLatestProducts(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    const fetchHotProducts = async () => {
      try {
        const result = await axios.get("http://localhost:8080/api/products/hot")
        setHotProducts(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    const fetchDiscountedProducts = async () => {
      try {
        const result = await axios.get("http://localhost:8080/api/products/discounted")
        setDiscountedProducts(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
        fetchCategories();
        fetchBrands();
        fetchProducts();
        fetchLatestProducts();
        fetchHotProducts();
        fetchDiscountedProducts();
      }, []);
   
    return (
    <div className="MainDiv">
        <Header categories={categories}></Header>
        <Home 
          brands={brands} 
          products={products}
          hotProducts={hotProducts}
          latestProducts={latestProducts}
          discountedProducts={discountedProducts}
        />
        <Footer></Footer>
    </div>
)
};



export default App; 