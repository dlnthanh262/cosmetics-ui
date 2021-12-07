import React, { useEffect, useState } from "react";

const Product = ({product, brands}) => {
    const [brandName, setBrandName] = useState("No brand");

    const getBrandName = () => {
        brands.map((brand) => {
            if (brand.id === product.brandId) {
                setBrandName(brand.name);
            }
        })
    }

    useEffect(() => {
        getBrandName();
      }, [product.id]);

    return (
        <a href="#" class="latest-product__item">
            <div class="latest-product__item__pic">
                <img src={`assets/img/products/${product.image}`} alt="" />
            </div>
            <div class="latest-product__item__text">
                <h6>{product.name}</h6>
                <h6 style={{color: 'grey'}}>{brandName}</h6>
                <span>{product.unitPrice}</span>
            </div>
        </a>
    )
}

export default Product
