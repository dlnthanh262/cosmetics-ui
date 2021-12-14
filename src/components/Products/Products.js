import React, { useEffect } from "react";
import axios from "axios";

import Product from "./Product/Product";

const Products = ({ brands, onAdd }) => {
  const [latestProductsPage1, setLatestProductsPage1] = React.useState([]);
  const [hotProductsPage1, setHotProductsPage1] = React.useState([]);
  const [discountedProductsPage1, setDiscountedProductsPage1] = React.useState(
    []
  );
  const [latestProductsPage2, setLatestProductsPage2] = React.useState([]);
  const [hotProductsPage2, setHotProductsPage2] = React.useState([]);
  const [discountedProductsPage2, setDiscountedProductsPage2] = React.useState(
    []
  );

  const fetchLatestProductsPage1 = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/api/products/latest"
      );
      setLatestProductsPage1(result.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHotProductsPage1 = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/api/products/hot?page=0"
      );
      setHotProductsPage1(result.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDiscountedProductsPage1 = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/api/products/discounted?page=0"
      );
      setDiscountedProductsPage1(result.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLatestProductsPage2 = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/api/products/latest?page=2"
      );
      setLatestProductsPage2(result.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHotProductsPage2 = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/api/products/hot?page=1"
      );
      setHotProductsPage2(result.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDiscountedProductsPage2 = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/api/products/discounted?page=1"
      );
      setDiscountedProductsPage2(result.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (latestProductsPage1.length == 0) {
      fetchLatestProductsPage1();
      fetchHotProductsPage1();
      fetchDiscountedProductsPage1();
      fetchLatestProductsPage2();
      fetchHotProductsPage2();
      fetchDiscountedProductsPage2();
    }
  }, []);

  return (
    <section class="latest-product spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <h4>Sản phẩm mới</h4>
              <div class="latest-product__slider owl-carousel">
                <div class="latest-prdouct__slider__item">
                  {latestProductsPage1.map((product) => (
                    <Product
                      product={product}
                      key={product.id}
                      brands={brands}
                      onAdd={onAdd}
                    />
                  ))}
                </div>
                <div class="latest-prdouct__slider__item">
                  {latestProductsPage2.map((product) => (
                    <Product
                      product={product}
                      key={product.id}
                      brands={brands}
                      onAdd={onAdd}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <h4>Sản phẩm hot</h4>
              <div class="latest-product__slider owl-carousel">
                <div class="latest-prdouct__slider__item">
                  {hotProductsPage1.map((product) => (
                    <Product
                      product={product}
                      key={product.id}
                      brands={brands}
                      onAdd={onAdd}
                    />
                  ))}
                </div>
                <div class="latest-prdouct__slider__item">
                  {hotProductsPage2.map((product) => (
                    <Product
                      product={product}
                      key={product.id}
                      brands={brands}
                      onAdd={onAdd}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <h4>Sản phẩm giảm giá</h4>
              <div class="latest-product__slider owl-carousel">
                <div class="latest-prdouct__slider__item">
                  {discountedProductsPage1.map((product) => (
                    <Product
                      product={product}
                      key={product.id}
                      brands={brands}
                      onAdd={onAdd}
                    />
                  ))}
                </div>
                <div class="latest-prdouct__slider__item">
                  {discountedProductsPage2.map((product) => (
                    <Product
                      product={product}
                      key={product.id}
                      brands={brands}
                      onAdd={onAdd}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
