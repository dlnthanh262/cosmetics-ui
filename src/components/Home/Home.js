import React from 'react';

import Brand from '../Brand/Brand';
import Products from '../Product/Products';

const Home = ({ brands, products, latestProducts, hotProducts, discountedProducts }) => {
    return (
        <div>
            <Brand brands={brands} key='brands'></Brand>
            <Products/>
        </div>
    )
}

export default Home
