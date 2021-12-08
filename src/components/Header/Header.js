import React from "react";

const Header = ({ categories }) => {
  return (
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="header__top__left">
                <ul>
                  <li>
                    <i class="fa fa-envelope"></i> bluecat@gmail.com
                  </li>
                  <li>Miễn phí giao hàng cho đơn hàng từ 500k</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="header__top__right">
                <div class="header__top__right__social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest-p"></i>
                  </a>
                </div>
                <div class="header__top__right__auth">
                  <a href="#">
                    <i class="fa fa-user"></i>Đăng nhập
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="header__logo">
              <a href="#" class="logo">
                Blue Cat
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <nav class="header__menu">
              <ul>
                <li class="active">
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Cửa hàng</a>
                  <ul class="header__menu__dropdown">
                    <li>
                      <a href="#">Sản phẩm mới</a>
                    </li>
                    <li>
                      <a href="#">Sản phẩm hot</a>
                    </li>
                    <li>
                      <a href="#">Sản phẩm khuyến mãi</a>
                    </li>
                    <li>
                      <a href="#">Tất cả sản phẩm</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Tin tức</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-3">
            <div class="header__cart">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-heart"></i> <span>1</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-shopping-bag"></i> <span>3</span>
                  </a>
                </li>
              </ul>
              <div class="header__cart__price">
                Tổng tiền: <span>$150.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="humberger__open">
          <i class="fa fa-bars"></i>
        </div>
      </div>

      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="hero__categories">
                <div class="hero__categories__all">
                  <i class="fa fa-bars"></i>
                  <span>Danh mục</span>
                </div>
                <ul>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <a href="#">{category.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="hero__search">
                <div class="hero__search__form">
                  <form action="#">
                    <input type="text" placeholder="Bạn cần gì?" />
                    <button type="submit" class="site-btn">
                      TÌM KIẾM
                    </button>
                  </form>
                </div>
                <div class="hero__search__phone">
                  <div class="hero__search__phone__icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="hero__search__phone__text">
                    <h5>+086 7309 836</h5>
                    <span>CSKH từ 7h - 22h</span>
                  </div>
                </div>
              </div>
              <div
                class="hero__item set-bg"
                data-setbg="http://localhost:3000/assets/img/hero/banner.webp"
              >
                <div class="hero__text">
                  <span>MĨ PHẨM XÁCH TAY</span>
                  <h2>
                    Cosmetics <br />
                    100% authentic
                  </h2>
                  <p>Miễn phí giao hàng cho đơn hàng từ 500k</p>
                  <a href="#" class="primary-btn">
                    MUA NGAY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
