import "./OurBestCards.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { MdLocationPin } from "react-icons/md";

const cards = [
  {
    id: 1,
    location: "New beach, Thailand",
    Image: "assets/img/CardSectionThree/hotel1.png",
    Title: "Kantua hotel,Thailand",
    rating: "4.8/5 Excellent ",
    review: "(1214 reviewes)",
    price: "$99.00",
  },
  {
    id: 2,
    location: "Indonesia",
    Image: "assets/img/CardSectionThree/hotel2.png",
    Title: "Hotel paradise internati",
    rating: "4.8/5 Excellent ",
    review: "(1214 reviewes)",
    price: "$99.00",
  },
  {
    id: 3,
    location: "Kualalampur",
    Image: "assets/img/CardSectionThree/hotel3.png",
    Title: "Hotel kualalampur",
    rating: "4.8/5 Excellent ",
    review: "(1214 reviewes)",
    price: "$99.00",
  },
  {
    id: 4,
    location: "Mariana island",
    Image: "assets/img/CardSectionThree/hotel4.png",
    Title: "Hotel deluxe",
    rating: "4.8/5 Excellent ",
    review: "(1214 reviewes)",
    price: "$99.00",
  },
  {
    id: 5,
    Title: "Kathmundu, Nepal",
    Image: "assets/img/CardSectionThree/hotel5.png",
    location: "Hotel rajavumi",
    rating: "4.8/5 Excellent ",
    review: "(1214 reviewes)",
    price: "$99.00",
  },
  {
    id: 6,
    Title: "Beach view",
    Image: "assets/img/CardSectionThree/hotel6.png",
    location: "Thailand grand suit",
    rating: "4.8/5 Excellent ",
    review: "(1214 reviewes)",
    price: "$99.00",
  },
  {
    id: 7,
    Title: "Long island",
    Image: "assets/img/CardSectionThree/hotel7.png",
    location: "Zefi resort and spa",
    rating: "4.8/5 Excellent ",
    review: "(1214 reviewes)",
    price: "$99.00",
  },

  {
    id: 8,
    Title: "Philippine",
    Image: "assets/img/CardSectionThree/hotel8.png",
    location: "Manila international resor",
    rating: "4.8/5 Excellent ",
    review: "(1214 reviewes)",
    price: "$99.00",
  },
];

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 340,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container">
        <div>
          <div className="title text-center">
            <h2 className="text-dark pb-1">Our best promotional tours</h2>
            <hr />
          </div>
        </div>
        <Slider {...settings}>
          {cards.map((item, key) => (
            <div className="ps-3">
              <div className="theme_common_box_two img_hover">
                <div
                  className={
                    key == 0
                      ? " theme_two_box_img "
                      : "" || key == 1
                      ? " theme_two_box_img  circle"
                      : "" || key == 2
                      ? " theme_two_box_img "
                      : "" || key == 3
                      ? " theme_two_box_img  circle"
                      : "" || key == 4
                      ? " theme_two_box_img "
                      : "" || key == 5
                      ? " theme_two_box_img  circle"
                      : "" || key == 6
                      ? " theme_two_box_img "
                      : "" || key == 7
                      ? " theme_two_box_img  circle"
                      : ""
                  }
                >
                  <a href="/">
                    <img src={item.Image} alt="" />
                  </a>
                  <p className="position-absolute bottom-0 start-0 text-white p-2">
                    <MdLocationPin size={20} /> {item.Title}
                  </p>
                </div>
                <div className="theme_two_box_content">
                  <h4 className="m-0">
                    <a href="/">{item.location}</a>
                  </h4>
                  <p className="m-0">
                    <span className="review_rating">{item.rating}</span>{" "}
                    <span className="ps-2">{item.review}</span>
                  </p>
                  <h3 className="fw-bold">
                    {item.price}
                    <span className="ps-2">Price starts from</span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
