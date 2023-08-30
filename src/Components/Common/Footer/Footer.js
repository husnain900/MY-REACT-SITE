import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const links = [
  {
    heading: "Company",
    items: [
      { text: "About Us", href: "/" },
      { text: "Testimonials", href: "/" },
      { text: "Rewards", href: "/" },
      { text: "Work with Us", href: "/" },
      { text: "Meet the Team", href: "/" },
      { text: "Blog", href: "/" },
    ],
  },
  {
    heading: "Support",
    items: [
      { text: "Account", href: "/" },
      { text: "Faq", href: "/" },
      { text: "Legal", href: "/" },
      { text: "Contact", href: "/" },
      { text: "Affiliate Program", href: "/" },
      { text: "Privacy Policy", href: "/" },
    ],
  },
  {
    heading: "Other Services",
    items: [
      { text: "Community program", href: "/" },
      { text: "Investor Relations", href: "/" },
      { text: "Rewards Program", href: "/" },
      { text: "PointsPLUS", href: "/" },
      { text: "Partners", href: "/" },
      { text: "List My Hotel", href: "/" },
    ],
  },
  {
    heading: "Top cities",
    items: [
      { text: "Chicago", href: "/" },
      { text: "New York", href: "/" },
      { text: "San Francisco", href: "/" },
      { text: "California", href: "/" },
      { text: "Ohio", href: "/" },
      { text: "Alaska", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <div>
      <footer id="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="footer_heading_area">
                <h5>Need any help?</h5>
              </div>
              <div className="footer_first_area">
                <div className="footer_inquery_area">
                  <h5>Call 24/7 for any help</h5>
                  <h3>
                    <a href="/">+00 123 456 789</a>
                  </h3>
                </div>
                <div className="footer_inquery_area">
                  <h5>Mail to our support team</h5>
                  <h3>
                    <a href="mailto:support@domain.com">support@domain.com</a>
                  </h3>
                </div>
                <div className="footer_inquery_area">
                  <h5>Follow us on</h5>
                  <li className="nav-icon">
                    <a href="#!">
                      <FaFacebookSquare />
                    </a>

                    <a href="#!">
                      <FaTwitterSquare />
                    </a>

                    <a href="#!">
                      <FaInstagram />
                    </a>

                    <a href="#!">
                      <FaLinkedin />
                    </a>
                  </li>
                </div>
              </div>
            </div>

            {links.map((section, index) => (
              <div
                className={
                  index == 0
                    ? "col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12"
                    : "" || index == 1
                    ? "col-lg-2 col-md-4 col-sm-6 col-12"
                    : "" || index == 2
                    ? "col-lg-2 col-md-4 col-sm-6 col-12"
                    : "" || index == 3
                    ? "col-lg-2 col-md-4 col-sm-6 col-12"
                    : ""
                }
                key={index}
              >
                <div className="footer_heading_area">
                  <h5>{section.heading}</h5>
                </div>
                <div className="footer_link_area">
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href={item.href}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="copyright_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="co-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright_left">
                <p>Copyright © 2022 All Rights Reserved</p>
              </div>
            </div>
            <div className="co-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright_right text-end">
                <img src="assets\img\cards.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
