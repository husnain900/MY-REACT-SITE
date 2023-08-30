import React from "react";
import { Container, Row } from "react-bootstrap";
import "../AboutUs/style.css";
const index = () => {
  return (
    <div>
      <Container>
        <div className="AboutUS">
          <Row>
            <div className="col-lg-6">
              <div className="about_us_left">
                <h5>About us</h5>
                <h2>We Are The World Best Travel Agency Company Since 2000</h2>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr{" "}
                </p>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr{" "}
                </p>
                <a href="/" className="btn btn_theme btn_md">
                  Find tours
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_us_right">
                <img src="Pages-About-img/abour_right.png" alt="img" />
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default index;
