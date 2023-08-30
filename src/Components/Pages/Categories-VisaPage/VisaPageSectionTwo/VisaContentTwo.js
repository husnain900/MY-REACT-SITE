import React from "react";
import "./VisaContentTwo.css";
import { Container, Row } from "react-bootstrap";
export default function VisaContentTwo() {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-lg-8">
            <div className="write_your_review_wrapper">
              <h3 className="heading_theme">Write your review</h3>
              <div className="write_review_inner_boxed">
                <form action="!#" id="news_comment_form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-froup">
                        <input
                          type="text"
                          className="form-control bg_input"
                          placeholder="Enter full name"
                          fdprocessedid="amhajw"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-froup">
                        <input
                          type="text"
                          className="form-control bg_input"
                          placeholder="Enter email address"
                          fdprocessedid="1kumku"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-froup">
                        <textarea
                          rows="6"
                          placeholder="Write your comments"
                          className="form-control bg_input"
                        ></textarea>
                      </div>
                      <div className="comment_form_submit">
                        <button
                          className="btn btn_theme btn_md"
                          fdprocessedid="8vs6dl"
                        >
                          Post comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
