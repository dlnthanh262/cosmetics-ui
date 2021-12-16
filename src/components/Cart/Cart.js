import React from "react";
import {useLocation} from 'react-router-dom';

import CartItem from "../CartItem/CartItem";

const Cart = ({ onAdd }) => {
  let location = useLocation();
  const cartItems = location.state;

  return (
    <div>
      <section class="section-content padding-y">
        <div class="container"> 
          <div class="row">
            <main class="col-md-9">
              <div class="card">
                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col">Sản phẩm</th>
                      <th scope="col" width="120">
                        Số lượng
                      </th>
                      <th scope="col" width="120">
                        Tổng tiền
                      </th>
                      <th scope="col" class="text-right" width="200">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <CartItem
                        cartItem={item}
                        onAdd={(onAdd)}
                        key={item.id}
                      />
                    ))}
                  </tbody>
                </table>

                <div class="card-body border-top">
                  <a href="#" class="btn btn-primary float-md-right">
                    {" "}
                    Thanh toán{" "}
                  </a>
                  <a href="#" class="btn btn-light">
                    {" "}
                    Tiếp tục mua sắm{" "}
                  </a>
                </div>
              </div>

              <div class="alert alert-success mt-3">
                <p class="icontext">
                  <i class="icon text-success fa fa-truck"></i> Giao hàng từ 2 -
                  7 ngày
                </p>
              </div>
            </main>
            <aside class="col-md-3">
              <div class="card mb-3">
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label>Mã khuyến mãi</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          name=""
                          placeholder="Coupon code"
                        />
                        <span class="input-group-append">
                          <button class="btn btn-primary">Áp dụng</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <dl class="dlist-align">
                    <dt>Tổng tiền sản phẩm:</dt>
                    <dd class="text-right"></dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Đã giảm:</dt>
                    <dd class="text-right"></dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Tổng cộng:</dt>
                    <dd class="text-right  h5">
                      <strong></strong>
                    </dd>
                  </dl>
                  <hr />
                  <p class="text-center mb-3">
                    <img src="assets/img/payment-item.png" height="26" />
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
