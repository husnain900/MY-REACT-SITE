import React from "react";
import { Container, Row } from "react-bootstrap";
const index = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <h2 className="d-none">Heading</h2>
          <div className="col-lg-4">
            <div className="about_offer_banner">
              <a href="!#">
                <img src="Pages-About-img/small_banner.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about_offer_banner">
              <img src="Pages-About-img/big_banner.png" alt="img" />
              <div className="about_offer_text">
                <h3>
                  Enjoy <span>20%</span> discount
                </h3>
                <h2>Thailand couple tour</h2>
                <a href="/">Find tours</a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default index;
