import React from 'react'

const Product = ({product}) => {
    return (
        <a href="#" class="latest-product__item">
            <div class="latest-product__item__pic">
                <img src={`assets/img/products/${product.image}`} alt="" />
            </div>
            <div class="latest-product__item__text">
                <h6>{product.name}</h6>
                <span>{product.unitPrice}</span>
            </div>
        </a>
    )
}

export default Product
