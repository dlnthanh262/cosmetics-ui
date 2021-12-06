import React from 'react';

const Brand = ({ brands }) => {
    
    return (
        <section class="categories">
              <div class="container">
                  <div class="row">
                      <div class="categories__slider owl-carousel">
                          {/* {
                              brands.map((brand) => (
                                <div class="col-lg-3" key={brand.id}>
                                    <div class="categories__item set-bg" data-setbg={`assets/img/brands/${brand.logo}`}>
                                        <h5><a href="#">{brand.name}</a></h5>
                                        </div>
                                 </div>
                              ))
                          } */}
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="assets/img/brands/corsx.jpg">
                                    <h5><a href="#">CORSX</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="assets/img/brands/paulachoice.jpg">
                                    <h5><a href="#">PAULA'S CHOICE</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="assets/img/brands/bioderma.jpg">
                                    <h5><a href="#">BIODERMA</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="assets/img/brands/skii.jpg">
                                    <h5><a href="#">SKII</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="assets/img/brands/theinkeylist.jpg">
                                    <h5><a href="#">THE INKEY LIST</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="assets/img/brands/maybelline.jpg">
                                    <h5><a href="#">MAYBELLINE</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="assets/img/brands/lifebuoy.jpg">
                                    <h5><a href="#">LIFEBUOY</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="assets/img/brands/tresemme.jpg">
                                    <h5><a href="#">TRESEMME</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="assets/img/brands/dhc.jpg">
                                    <h5><a href="#">DHC</a></h5>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
          </section>
    )
}

export default Brand
