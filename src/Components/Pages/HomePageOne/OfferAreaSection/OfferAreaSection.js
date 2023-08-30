import React from "react";
import "./OfferAreaSection.css";
const card = [
  {
    id: 1,
    Image: "assets/img/CardSectionFour/offer1.png",
    title: "Special Offers",
    lorem:
      "Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    Image: "assets/img/CardSectionFour/offer2.png",
    title: "News letter",
    lorem:
      "Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    id: 3,
    Image: "assets/img/CardSectionFour/offer3.png",
    title: "Special Offers",
    lorem:
      "Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
];

export default function CardSectionFour() {
  return (
    <div className="img-cards">
    <div className="container">
    <div className="row">
        {card.map((item, key) => (
          <div className={
            key == 0
              ? "col-lg-6 col-md-12 col-sm-12 col-12"
              : "" || key == 1
              ? "col-lg-3 col-md-6 col-sm-12 col-12"
              : "" || key == 2
              ? "col-lg-3 col-md-6 col-sm-12 col-12"
              : ""
          }>
            <div className="offer_area_box d-none-phone img_animation">
              <img
                src={item.Image}
                alt=""
                className={
                  key == 0
                    ? "card-adjust"
                    : "" || key == 1
                    ? "card-adjust2"
                    : "" || key == 2
                    ? "card-adjust2"
                    : ""
                }
                />
                <div className="offer_area_content">
                <h2>{item.title}</h2>
                <p>{item.lorem}</p>
                <a href="#!" className="btn btn_theme btn_md">
                Holiday deals
                </a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
