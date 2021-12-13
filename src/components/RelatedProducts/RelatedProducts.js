import React, { useEffect } from "react";
import axios from "axios";

import RelatedProduct from "./RelatedProduct/RelatedProduct";
import Product from "../Products/Product/Product";

const RelatedProducts = ({ categoryId, brandId }) => {
  const [relatedProductsByCategoryPage1, setRelatedProductsByCategoryPage1] =
    React.useState([]);
  const [relatedProductsByCategoryPage2, setRelatedProductsByCategoryPage2] =
    React.useState([]);
  const [relatedProductsByBrandPage1, setRelatedProductsByBrandPage1] =
    React.useState([]);
  const [relatedProductsByBrandPage2, setRelatedProductsByBrandPage2] =
    React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [hasSecondCategoryPage, setHasSecondCategoryPage] =
    React.useState(false);
  const [hasSecondBrandPage, setHasSecondBrandPage] = React.useState(false);

  const fetchRelatedProductsByCategoryPage1 = async () => {
    var apiUri =
      "http://localhost:8080/api/products/category/" + categoryId + "?page=0";
    try {
      const result = await axios.get(apiUri);
      setRelatedProductsByCategoryPage1(result.data.products);
      if (result.data.totalPages > 1) {
        setHasSecondCategoryPage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRelatedProductsByCategoryPage2 = async () => {
    var apiUri =
      "http://localhost:8080/api/products/category/" + categoryId + "?page=1";
    try {
      const result = await axios.get(apiUri);
      setRelatedProductsByCategoryPage2(result.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRelatedProductsByBrandPage1 = async () => {
    var apiUri =
      "http://localhost:8080/api/products/brand/" + brandId + "?page=0";
    try {
      const result = await axios.get(apiUri);
      setRelatedProductsByBrandPage1(result.data.products);
      if (result.data.totalPages > 1) {
        setHasSecondBrandPage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRelatedProductsByBrandPage2 = async () => {
    var apiUri =
      "http://localhost:8080/api/products/brand/" + brandId + "?page=1";
    try {
      const result = await axios.get(apiUri);
      setRelatedProductsByBrandPage2(result.data.products);
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
    if (categoryId != null && brandId != null) {
      fetchRelatedProductsByCategoryPage1();
      fetchRelatedProductsByCategoryPage2();
      fetchRelatedProductsByBrandPage1();
      fetchRelatedProductsByBrandPage2();
    }
    fetchBrands();
  });

  return (
    <section class="categories">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="latest-product__text">
              <h4>Sản phẩm cùng loại</h4>
              <div class="latest-product__slider owl-carousel">
                <div class="latest-prdouct__slider__item">
                  {relatedProductsByCategoryPage1.map((product) => (
                    <Product
                      product={product}
                      key={product.id}
                      brands={brands}
                    />
                  ))}
                </div>
                <div class="latest-prdouct__slider__item">
                  {hasSecondCategoryPage
                    ? relatedProductsByCategoryPage2.map((product) => (
                        <Product
                          product={product}
                          key={product.id}
                          brands={brands}
                        />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="latest-product__text">
              <h4>Sản phẩm cùng thương hiệu</h4>
              <div class="latest-product__slider owl-carousel">
                <div class="latest-prdouct__slider__item">
                  {relatedProductsByBrandPage1.map((product) => (
                    <Product
                      product={product}
                      key={product.id}
                      brands={brands}
                    />
                  ))}
                </div>
                <div class="latest-prdouct__slider__item">
                  {hasSecondBrandPage
                    ? relatedProductsByBrandPage2.map((product) => (
                        <Product
                          product={product}
                          key={product.id}
                          brands={brands}
                        />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
