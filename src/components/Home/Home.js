import React from 'react';

import Brand from '../Brand/Brand';
import Products from '../Product/Products';

const Home = ({ brands , products }) => {
   console.log(products);
    return (
        <div>
            <Brand brands={brands} key='brands'></Brand>
            <Products brands={brands}/>
        </div>
    )
}

export default Home
