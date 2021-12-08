import React, { useEffect, useState } from "react";

import NumberFormat from "react-number-format";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

const Product = ({ product, brands }) => {
  const [brandName, setBrandName] = useState("No brand");
  const [type, setType] = useState("");

  const getBrandName = () => {
    brands.map((brand) => {
      if (brand.id === product.brandId) {
        setBrandName(brand.name);
      }
    });
  };

  const getType = () => {
    if (product.discountAvailable) {
      setType("Sale " + product.discountPercent + "%");
    }
  };

  useEffect(() => {
    getBrandName();
    getType();
  }, [product.name]);

  return (
    <a href="#" class="latest-product__item position-relative">
      <div class="badge-overlay position-absolute">
        <span class="top-left badge">{type}</span>
      </div>
      <div class="latest-product__item__pic">
        <img src={`assets/img/products/${product.image}`} alt="" />
      </div>
      <div class="latest-product__item__text">
        <h6 className="home-product-clamp-lines">{product.name}</h6>
        <h6 style={{ color: "grey" }}>{brandName}</h6>
        <NumberFormat
          value={(product.unitPrice * (100 - product.discountPercent)) / 100}
          displayType={"text"}
          className="home-product-discounted-price"
          thousandSeparator={true}
          renderText={(value, props) => <span {...props}>{value}</span>}
        />
        {type === "" ? null : (
          <NumberFormat
            value={product.unitPrice}
            displayType={"text"}
            className="home-product-unit-price"
            thousandSeparator={true}
            renderText={(value, props) => <span {...props}>{value}</span>}
          />
        )}
      </div>
      <Button className="home-product-cart-button" onClick={() => {}}>
        {" "}
        <ShoppingCartIcon />{" "}
      </Button>
    </a>
  );
};

export default Product;
