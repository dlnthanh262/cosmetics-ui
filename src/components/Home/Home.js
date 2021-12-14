import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Brand from '../Brand/Brand';
import Products from '../Products/Products';
import Blogs from '../Blogs/Blogs';

const Home = ({ brands , products, posts, onAdd }) => {
    return (
        <div>
            <Brand brands={brands}></Brand>
            <Products brands={brands} onAdd={onAdd} />
            <Blogs posts={posts}/>
        </div>
    )
}

export default Home
