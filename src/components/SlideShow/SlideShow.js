import React from "react";

const SlideShow = ({ image1, image2, image3 }) => {
  return (
    <div>
      <div className="row">
        <div className="mySlides fadeSlideShow">
          <div className="numbertextSlide">1 / 3</div>
          <img src={image1} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fadeSlideShow">
          <div className="numbertextSlide">2 / 3</div>
          <img src={image2} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fadeSlideShow">
          <div className="numbertextSlide">3 / 3</div>
          <img src={image3} style={{ width: "100%" }} />
        </div>
      </div>

      <div className="row">
        <div style={{ textAlign: "left" }}>
          <span className="slideshow-span">
            <img src={image1} className="slideShow-dot"></img>
          </span>
          <span className="slideshow-span">
            <img src={image2} className="slideShow-dot"></img>
          </span>
          <span className="slideshow-span">
            <img src={image3} className="slideShow-dot"></img>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
