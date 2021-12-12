import React, { useEffect } from "react";
import axios from "axios";

import Product from "../Products/Product/Product";

const RelatedProduct = ({ categoryId }) => {
  const [relatedProducts, setRelatedProducts] = React.useState([]);
  const [brands, setBrands] = React.useState([]);

  const fetchRelatedProducts = async () => {
    var apiUri = "http://localhost:8080/api/products/" + categoryId;
    try {
      const result = await axios.get(apiUri);
      setRelatedProducts(result.data);
      console.log(result.data);
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

  useEffect(() => {
    fetchRelatedProducts();
    fetchBrands();
  });

  return (
    <section class="categories">
      <div class="container">
        <div class="row">
          <div class="categories__slider owl-carousel">
            {relatedProducts.map((product) => (
              <Product product={product} brands={brands}></Product>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
