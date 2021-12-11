import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Brand from '../Brand/Brand';
import Products from '../Products/Products';
import Blogs from '../Blogs/Blogs';

const Home = ({ brands , products, posts }) => {
    return (
        <div>
            <Brand brands={brands}></Brand>
            <Products brands={brands}/>
            <Blogs posts={posts}/>
        </div>
    )
}

export default Home
