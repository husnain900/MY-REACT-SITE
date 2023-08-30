import React from "react";
import "./GoBeyond.css";
const img = [
  {
    id: 1,
    images: "assets/img/CardSectionOne/imagination1.png",
    content: "7% Discount for all Airlines",
  },
  {
    id: 2,
    images: "assets/img/CardSectionOne/imagination2.png",
    content: "Travel around the world",
  },
  {
    id: 3,
    images: "assets/img/CardSectionOne/imagination3.png",
    content: "Luxury resorts top deals",
  },
];
const CardSectionOne = () => {
  return (
    <>
      <section className="card-sec-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="heading_left_area">
                <h2 className="text-dark">
                  Go beyond your <span border-sm-0>imagination</span>
                </h2>
                <h5>Discover your ideal experience with us</h5>
              </div>
            </div>
            {img.map((item) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="imagination_boxed">
                  <a href="/">
                    <img
                      src={item.images}
                      alt=""
                    />{" "}
                  </a>
                  <h3>
                    <a href="/">
                      {item.content}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardSectionOne;
