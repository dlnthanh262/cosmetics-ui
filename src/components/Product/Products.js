import React from 'react';

import Product from './Product/Product';

const Products = ({products, latestProducts, hotProducts, discountedProducts}) => {
    return (
        <section class="latest-product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>Sản phẩm mới</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__item">
                                {
                                    latestProducts.map((product) => (
                                        <Product product={product} key={product.id}></Product>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>Sản phẩm hot</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__item">
                            {
                                hotProducts.map((product) => (
                                    <Product product={product} key={product.id}></Product>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>Sản phẩm giảm giá</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__item">
                            {
                                discountedProducts.map((product) => (
                                    <Product product={product} key={product.id}></Product>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Products;
