import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import "./GridCardSection.css"

const cards = [
  {
    id: 1,
    Image: "assets/img/GridCardSection/small1.png",
    Title: "Revolutionising the travel industry, one partnership at a time",
    date: "26 Oct 2021 ",
    time: "5min read",
  },
  {
    id: 2,
    Image: "assets/img/GridCardSection/small2.png",
    Title: "t is a long established fact that a reader will be distracted.",
    date: "26 Oct 2021 ",
    time: "5min read",
  },
  {
    id: 3,
    Image: "assets/img/GridCardSection/small3.png",
    Title: "There are many variations of passages of sum available",
    date: "26 Oct 2021 ",
    time: "5min read",
  },
  {
    id: 4,
    Image: "assets/img/GridCardSection/small4.png",
    Title: "Contrary to popular belief, Lorem Ipsum is not simply.",
    date: "26 Oct 2021 ",
    time: "5min read",
  },
];

export default function GridCardSection() {
  return (
    <div className="container">
      <div className="title text-center">
        <h2 className="text-dark pb-1">Latest travel news </h2>
        <hr />
      </div>
      <div class="row">
        <div className="col-lg-6">
          {cards.map((item) => (
            <div>
              <div className="home_news_left_wrapper mb-3">
                <div className="home_news_item">
                  <div className="home_news_img">
                    <img src={item.Image} alt="" />
                  </div>
                  <div className="home_news_content">
                    <h3>
                      <a>{item.Title}</a>
                    </h3>
                    <p>
                      <a className="trans">{item.date}</a>{" "}
                      <span>
                        <BsFillCircleFill className="circle-dot" /> {item.time}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <a className="trans mt-3">
            See all article <AiOutlineArrowRight />
          </a>
        </div>

        <div className="col-lg-6">
          <div className="home_news_big  mt-4 mt-lg-0 mt-md-5 mt-xl-0">
            <div className="img_hover news_home_bigest">
              <img src="assets\img\GridCardSection\new-big.png" alt="" />
            </div>
            <h3>There are many variations of passages available but</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of. The point of using Lorem Ipsum is that it
              has a more <br />
              It is a long established fact that a reader will be distracted by
              the readable long established fact that a reader will be
              distracted content of a page when looking at its layout.
            </p>
            <a className="trans">
              See all article <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
