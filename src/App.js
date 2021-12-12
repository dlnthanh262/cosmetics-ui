import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const App = () => {
  const [categories, setCategories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/posts");
      setPosts(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/categories");
      setCategories(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBrands = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/brands");
      setBrands(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/products");
      setProducts(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBrands();
    fetchProducts();
    fetchPosts();
  }, []);

  return (
    <BrowserRouter forceRefresh>
      <div className="MainDiv">
        <Header categories={categories}></Header>
        <Switch>
          <Route exact path="/">
            <Home products={products} posts={posts} brands={brands} />
          </Route>
          <Route exact path="/product/:id">
            <ProductDetail brands={brands}/>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
