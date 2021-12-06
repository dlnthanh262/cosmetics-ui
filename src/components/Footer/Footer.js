import React from 'react'

const Footer = () => {
    return (
        <footer class="footer spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="footer__about">
                              <div class="footer__about__logo">
                                  <a href="#" class="logo">Blue Cat</a>
                              </div>
                              <ul>
                                  <li>Địa chỉ: TPHCM</li>
                                  <li>Hotline: 086 7309 836</li>
                                  <li>Email: bluecat@gmail.com</li>
                                  <li>Giờ làm việc</li>
                                  <li>Thứ 2 - Thứ 7: 7:00 - 22:00</li>
                                  <li>Chủ nhật: 12:30 - 22:00</li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                          <div class="footer__widget">
                              <h6>Thông tin</h6>
                              <ul>
                                  <li><a href="#">Về Blue Cat</a></li>
                                  <li><a href="#">Cửa hàng</a></li>
                                  <li><a href="#">Dịch vụ</a></li>
                                  <li><a href="#">Thương hiệu</a></li>
                                  <li><a href="#">Sản phẩm</a></li>
                              </ul>
                              <ul>
                                  <li><a href="#">Hình thức thanh toán</a></li>
                                  <li><a href="#">Chính sách bảo mật</a></li>
                                  <li><a href="#">Điều khoản sử dụng</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-12">
                          <div class="footer__widget">
                              <h6>Tham gia club Colorful Cat Ladies</h6>
                              <p>Để nhận thông báo từ email về các sản phẩm, sự kiện và chính sách khuyến mãi mới nhất.</p>
                              <form action="#">
                                  <input type="text" placeholder="Nhập email của bạn" />
                                  <button type="submit" class="site-btn">Đăng ký</button>
                              </form>
                              <div class="footer__widget__social">
                                  <a href="#"><i class="fa fa-facebook"></i></a>
                                  <a href="#"><i class="fa fa-instagram"></i></a>
                                  <a href="#"><i class="fa fa-twitter"></i></a>
                                  <a href="#"><i class="fa fa-pinterest"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="footer__copyright">
                              <div class="footer__copyright__text"><p>
        Copyright &copy;2021
      </p></div>
                              <div class="footer__copyright__payment"><img src="assets/img/payment-item.png" alt="" /></div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
    )
}

export default Footer;
