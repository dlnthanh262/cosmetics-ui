import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import NumberFormat from "react-number-format";

import SlideShow from "../SlideShow/SlideShow";
import RelatedProduct from "../RelatedProduct/RelatedProduct";

const ProductDetail = ({ brands }) => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [itemCount, setItemCount] = React.useState(1);
  const [brandName, setBrandName] = React.useState("No brand");
  const [isDiscounted, setIsDiscounted] = React.useState(false);

  const fetchProduct = async () => {
    let apiUri = "http://localhost:8080/api/product/" + id;
    try {
      const result = await axios.get(apiUri);
      setProduct(result.data);
      brands.map((brand) => {
        if (brand.id === result.data.brandId) {
          setBrandName(brand.name);
        }
      });
      setIsDiscounted(result.data.discountAvailable);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  });

  return (
    <section className="product-detail">
      <div class="container">
        <div className="row">
          <div className="product-detail-image col">
            <SlideShow
              image1={`http://localhost:3000/assets/img/products/${product.image}`}
              image2={`http://localhost:3000/assets/img/products/${product.image}`}
              image3={`http://localhost:3000/assets/img/products/${product.image}`}
            />
          </div>
          <div className="product-detail-info col">
            <h4 style={{ fontWeight: "bold" }}>{product.name}</h4>
            <br />
            <div className="row">
              <div className="col-lg-3">
                <p style={{ margin: "0", height: "30px" }}>Thương hiệu:</p>
              </div>
              <div className="col-lg-9">
                <p style={{ margin: "0", height: "30px" }}>{brandName}</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-3">
                <p style={{ margin: "0", height: "30px" }}>Đơn giá:</p>
              </div>
              <div className="col-lg-9">
                <NumberFormat
                  value={
                    (product.unitPrice * (100 - product.discountPercent)) / 100
                  }
                  displayType={"text"}
                  style={{ fontWeight: "bold" }}
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
                {isDiscounted ? (
                  <NumberFormat
                    value={product.unitPrice}
                    displayType={"text"}
                    className="home-product-unit-price"
                    thousandSeparator={true}
                    renderText={(value, props) => (
                      <span {...props}>{value}</span>
                    )}
                  />
                ) : null}
              </div>
            </div>
            <br />
            <ButtonGroup>
              <p className="product-detail-button-text">Số lượng: </p>
              <Button
                onClick={() => {
                  setItemCount(Math.max(itemCount - 1, 1));
                }}
                className="product-detail-button"
                style={{ marginLeft: "60px" }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <p className="product-detail-button-text">{itemCount}</p>
              <Button
                onClick={() => {
                  setItemCount(Math.min(itemCount + 1, product.quantity));
                }}
                className="product-detail-button"
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
            <br />
            <br />
            <div className="row">
              <div className="col-lg-3">
                <p style={{ margin: "0", height: "30px" }}>Tổng tiền:</p>
              </div>
              <div className="col-lg-9">
                <NumberFormat
                  value={product.unitPrice * (100 - product.discountPercent) / 100 * itemCount}
                  displayType={"text"}
                  className="home-product-discounted-price"
                  thousandSeparator={true}
                  renderText={(value, props) => <span {...props}>{value}</span>}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-12">
                <Button className="product-detail-button-cart">
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
            <br />
            <p style={{ margin: "0", height: "30px" }}>Mô tả:</p>
            <p style={{ fontSize: "14px" }}>{product.description}</p>
          </div>
        </div>

        <div className="row">
          <RelatedProduct categoryId={product.categoryId}></RelatedProduct>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
