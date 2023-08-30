import React from "react";
import "./AllReviewCards.css";
import { FaStar } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const reviews = [
  {
    date: "08 Dec, 2021",
    rating: "Excellent",
    image: "visa-img/review1.png",
    name: "Manresh Chandra",
    text: "Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it.",
    smallImages: [
      "visa-img/review-small1.png",
      "visa-img/review-small2.png",
      "visa-img/review-small3.png",
      "visa-img/review-small4.png",
      "visa-img/review-small5.png",
    ],
    additionalImages: "+5",
  },
  {
    date: "08 Dec, 2021",
    rating: "Excellent",
    image: "visa-img/review2.png",
    name: "Michel falak",
    text: "Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it.",
  },
  {
    date: "08 Dec, 2021",
    rating: "Excellent",
    image: "visa-img/review3.png",
    name: "Chester dals",
    text: "Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it.",
    smallImages: [
      "visa-img/review-small1.png",
      "visa-img/review-small2.png",
      "visa-img/review-small3.png",
    ],
    additionalImages: "+15",
  },
  {
    date: "08 Dec, 2021",
    rating: "Excellent",
    image: "visa-img/review4.png",
    name: "Casper mike",
    text: "Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it.",
    smallImages: ["visa-img/review-small1.png", "visa-img/review-small2.png"],
    additionalImages: "+19",
  },
  {
    date: "08 Dec, 2021",
    rating: "Excellent",
    image: "visa-img/review5.png",
    name: "Jason bruno",
    text: "Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it.",
  },
];

export default function AllReviewCards() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="all_review_wrapper">
              <h3 className="heading_theme">All reviews</h3>
            </div>
          </Col>
          {reviews.map((review, index) => (
            <Col lg={4} md={6} key={index}>
              <div className="all_review_box">
                <div className="all_review_date_area">
                  <div className="all_review_date">
                    <h5>{review.date}</h5>
                  </div>
                  <div className="all_review_star">
                    <h5>{review.rating}</h5>
                    <div className="review_star_all">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="all_review_text">
                  <img src={review.image} alt="img" />
                  <h4>{review.name}</h4>
                  <p>"{review.text}"</p>
                </div>
                <div className="all_review_small_img">
                  {review.smallImages &&
                    review.smallImages.map((img, idx) => (
                      <div className="all_review_small_img_item" key={idx}>
                        <img src={img} alt="img" />
                      </div>
                    ))}
                  <div className="all_review_small_img_item">
                    <h5>{review.additionalImages}</h5>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
