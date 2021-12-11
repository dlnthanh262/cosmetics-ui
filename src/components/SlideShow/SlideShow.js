import React from "react";

const SlideShow = ({ image1, image2, image3 }) => {
  return (
    <div>
      <div className="row">
        <div class="mySlides fadeSlideShow">
          <div class="numbertextSlide">1 / 3</div>
          <img src={image1} style={{ width: "100%" }} />
        </div>
        <div class="mySlides fadeSlideShow">
          <div class="numbertextSlide">2 / 3</div>
          <img src={image2} style={{ width: "100%" }} />
        </div>
        <div class="mySlides fadeSlideShow">
          <div class="numbertextSlide">3 / 3</div>
          <img src={image3} style={{ width: "100%" }} />
        </div>
      </div>

      <div className="row">
        <div style={{ textAlign: "left" }}>
          <span onClick="currentSlide(1)">
            <img src={image1} className="slideShow-dot"></img>
          </span>
          <span onClick="currentSlide(2)">
            <img src={image2} className="slideShow-dot"></img>
          </span>
          <span onClick="currentSlide(3)">
            <img src={image3} className="slideShow-dot"></img>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
