import React from 'react'

const RelatedProduct = ({products, brands}) => {
    return (
        <section class="categories">
        <div class="container">
            <div class="row">
                <div class="categories__slider owl-carousel">
                    {/* {
                        brands.map((brand) => (
                          <div class="col-lg-3" key={brand.id}>
                              <div class="categories__item set-bg" data-setbg={`http://localhost:3000/assets/img/brands/${brand.logo}`}>
                                  <h5><a href="#">{brand.name}</a></h5>
                                  </div>
                           </div>
                        ))
                    } */}

                </div>
            </div>
        </div>
    </section>
    )
}

export default RelatedProduct
