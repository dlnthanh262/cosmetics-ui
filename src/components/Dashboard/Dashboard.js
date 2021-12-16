import React from "react";
import { Button, Modal, Input } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Product from "./Product/Product";

const Dashboard = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Blue Cat
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/dashboard/category" className="nav-link" aria-current="page">Phân loại</Link>
              </li>
              <li class="nav-item">
              <Link to="/dashboard/product" className="nav-link">Sản phẩm</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter forceRefresh>
        <Switch>
          <Route path={["/dashboard", "/dashboard/category"]}>
            <Product></Product>
          </Route>

          <Route path="/dashboard/product">
            <Product></Product>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
