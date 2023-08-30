import React from "react";
import './TopDestinations.css';

export default function CardSectionTwo() {
  return (
    <>
      <div className="container">
      <div className="title text-center">
          <h2 className="text-dark pb-1">Top destinations</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="destinations_content_box img_animation">
              <img src="assets\img\CardsSectionTwo\big-img.png" alt="" />
              <div className="destinations_content_inner">
                <h2>Up to</h2>
                <div className="d-flex b-content">
                  <h1>50</h1>
                  <h6 className="text-white">
                    <span>%</span><br/><span>Off</span>
                  </h6>
                </div>
                <h2>Holiday packages</h2>
                <a href="/" className="btn btn_theme btn_md">
                  Book now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="destinations_content_box img_animation">
                  <a href="/">
                    <img
                      src="assets\img\CardsSectionTwo\destination1.png"
                      alt=""
                    />
                  </a>
                  <div className="destinations_content_inner">
                    <h3>
                      <a href="/">China</a>
                    </h3>
                  </div>
                </div>
                <div className="destinations_content_box img_animation">
                  <a href="/">
                    <img
                      src="assets\img\CardsSectionTwo\destination2.png"
                      alt=""
                    />
                  </a>
                  <div className="destinations_content_inner">
                    <h3>
                      <a href="/">Darjeeling</a>
                    </h3>
                  </div>
                </div>
                <div className="destinations_content_box img_animation">
                  <a href="/">
                    <img
                      src="assets\img\CardsSectionTwo\destination3.png"
                      alt=""
                    />
                  </a>
                  <div className="destinations_content_inner">
                    <h3>
                      <a href="/">Malaysia</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="destinations_content_box img_animation">
                  <a href="/">
                    <img
                      src="assets\img\CardsSectionTwo\destination4.png"
                      alt=""
                    />
                  </a>
                  <div className="destinations_content_inner">
                    <h3>
                      <a href="/">Gangtok</a>
                    </h3>
                  </div>
                </div>
                <div className="destinations_content_box img_animation">
                  <a href="/">
                    <img
                      src="assets\img\CardsSectionTwo\destination5.png"
                      alt=""
                    />
                  </a>
                  <div className="destinations_content_inner">
                    <h3>
                      <a href="/">Thailand</a>
                    </h3>
                  </div>
                </div>
                <div className="destinations_content_box img_animation">
                  <a href="/">
                    <img
                      src="assets\img\CardsSectionTwo\destination6.png"
                      alt=""
                    />
                  </a>
                  <div className="destinations_content_inner">
                    <h3>
                      <a href="/">Australia</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="destinations_content_box img_animation">
                  <a href="/">
                    <img
                      src="assets\img\CardsSectionTwo\destination7.png"
                      alt=""
                    />
                  </a>
                  <div className="destinations_content_inner">
                    <h3>
                      <a href="/">London</a>
                    </h3>
                  </div>
                </div>
                <div className="destinations_content_box img_animation">
                  <a href="/">
                    <img
                      src="assets\img\CardsSectionTwo\destination8.png"
                      alt=""
                    />
                  </a>
                  <div className="destinations_content_inner">
                    <h3>
                      <a href="/">USA</a>
                    </h3>
                  </div>
                  </div>
                  <div className="destinations_content_box">
                    <a href="/" className="btn btn_theme btn_md w-100">
                      View all
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
