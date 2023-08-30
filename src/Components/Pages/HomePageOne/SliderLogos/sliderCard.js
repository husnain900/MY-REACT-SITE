import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  items: 8,
  nav: true,
  autoplay: true,
  loop: true,
  margin: 10,
  autoplaySpeed: 1500,
};

const img = [
  { Image: "assets/img/sliderCards/2.png" },
  { Image: "assets/img/sliderCards/3.png" },
  { Image: "assets/img/sliderCards/4.png" },
  { Image: "assets/img/sliderCards/5.png" },
  { Image: "assets/img/sliderCards/6.png" },
  { Image: "assets/img/sliderCards/7.png" },
  { Image: "assets/img/sliderCards/8.png" },
];

export default function SliderCard() {
  return (
    <div className="slider-logos">
      <div className="container">
        <div className="title text-center">
          <h2 className="text-dark pb-1">Our partners</h2>
          <hr />
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {img.map((item, index) => (
            <div className="slide-img" key={index}>
              <a href="/">
                <img
                  src={item.Image}
                  alt=""
                  className="image"
                />
              </a>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}
