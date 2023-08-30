import React from "react";
import "../ProfileCards/style.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    date: "08 Dec, 2021",
    rating: "Excellent",
    image: "Pages-About-img/review6.png",
    name: "Jesica simpsn",
    role: "Tourist",
    comment:
      "Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it.",
  },
  {
    date: "08 Dec, 2021",
    rating: "Excellent",
    image: "Pages-About-img/review6.png",
    name: "Santa mariam",
    role: "Traveler",
    comment:
      "Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it.",
  },
  {
    date: "08 Dec, 2021",
    rating: "Excellent",
    image: "Pages-About-img/review7.png",
    name: "Jack cremer",
    role: "Manager",
    comment:
      "Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it.",
  },
];

const Index = () => {
  return (
    <div className="profileCards">
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="section_heading_center">
            <h2>Customer review</h2>
          </div>
        </div>
        <div className="row">
          {reviews.map((review, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>{review.date}</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>{review.rating}</h5>
                    <div className="review_star_all">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <img src={review.image} alt="img" />
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                  <p>"{review.comment}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
  