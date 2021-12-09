import React from "react";

const Banner = () => {
  return (
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
  );
};

export default Banner;
