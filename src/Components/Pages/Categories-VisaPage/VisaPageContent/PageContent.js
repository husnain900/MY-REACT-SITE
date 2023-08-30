import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Accordion } from "react-bootstrap";
import { FaClock, FaPaw, FaDollarSign, FaCircle } from "react-icons/fa";
import "./PageContent.css";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const overviewItems = [
  "Buffet breakfast as per the Itinerary",
  "Visit eight villages showcasing Polynesian culture",
  "Complimentary Camel safari, Bonfire, and Cultural Dance at Camp",
  "All toll tax, parking, fuel, and driver allowances",
  "Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.",
];
const visaDocuments = [
  {
    title: "Job Holder",
    items: [
      "Buffet breakfast as per the Itinerary",
      "Visit eight villages showcasing Polynesian culture",
      "Complimentary Camel safari, Bonfire, and Cultural Dance at Camp",
      "All toll tax, parking, fuel, and driver allowances",
      "Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.",
    ],
  },
  {
    title: "Businessman",
    items: [
      "Buffet breakfast as per the Itinerary",
      "Visit eight villages showcasing Polynesian culture",
      "Complimentary Camel safari, Bonfire, and Cultural Dance at Camp",
      "All toll tax, parking, fuel, and driver allowances",
      "Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.",
    ],
  },
  {
    title: "Doctor",
    items: [
      "Buffet breakfast as per the Itinerary",
      "Visit eight villages showcasing Polynesian culture",
      "Complimentary Camel safari, Bonfire, and Cultural Dance at Camp",
      "All toll tax, parking, fuel, and driver allowances",
      "Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.",
    ],
  },
  {
    title: "Student",
    items: [
      "Buffet breakfast as per the Itinerary",
      "Visit eight villages showcasing Polynesian culture",
      "Complimentary Camel safari, Bonfire, and Cultural Dance at Camp",
      "All toll tax, parking, fuel, and driver allowances",
      "Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.",
    ],
  },
  {
    title: "Housewife",
    items: [
      "Buffet breakfast as per the Itinerary",
      "Visit eight villages showcasing Polynesian culture",
      "Complimentary Camel safari, Bonfire, and Cultural Dance at Camp",
      "All toll tax, parking, fuel, and driver allowances",
      "Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.",
    ],
  },
];
const includedItems = [
  "Buffet breakfast as per the Itinerary",
  "Visit eight villages showcasing Polynesian culture",
  "Complimentary Camel safari, Bonfire, and Cultural Dance at Camp",
  "All toll tax, parking, fuel, and driver allowances",
  "Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.",
];

export default function PageContent() {
  const [activeItem, setActiveItem] = useState(null);

  const handleAccordionItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index); }; 
  return (
    <div>
      <Container>
      <div className="section_padding">
        <Row>
        


          <div className="col-lg-8">
            <div className="tour_details_heading_wrapper">
              <div className="tour_details_top_heading">
                <h2>United states</h2>
                <h5>21,873 visa provided</h5>
              </div>
              <div className="tour_details_top_heading_right">
                <h4 className="purple">Excellent</h4>
                <h6 className="purple">4.8/5</h6>
                <p>(1214 reviewes)</p>
              </div>
            </div>

            <div className="tour_details_top_bottom">
              <div className="toru_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <FaClock />
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Duration</h5>
                  <p>10 days</p>
                </div>
              </div>
              <div className="toru_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <FaPaw />
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Visa type</h5>
                  <p>All</p>
                </div>
              </div>
              <div className="toru_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <FaDollarSign />
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Currency type</h5>
                  <p>United states dollar</p>
                </div>
              </div>
              <div className="toru_details_top_bottom_item">
                <div className="tour_details_top_bottom_icon">
                  <FaClock />
                </div>
                <div className="tour_details_top_bottom_text">
                  <h5>Local time</h5>
                  <p>GMT -1</p>
                </div>
              </div>
            </div>

            <div className="visa_details_img">
              <img src="visa-img/usa.png" alt="img" />
            </div>

            <div className="tour_details_boxed">
              <h3 className="heading_theme">Overview</h3>
              <div className="tour_details_boxed_inner">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est.
                </p>
                <p>
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                  ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod.
                </p>
                <ul>
                  {overviewItems.map((item, index) => (
                    <li key={index}>
                      <FaCircle /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="tour_details_boxed visa_holder_area">
              <h3 className="heading_theme">Required Documents for visa</h3>
              {visaDocuments.map((category, index) => (
                <div className="tour_details_boxed_inner" key={index}>
                  <h3>{category.title}:</h3>
                  <ul>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <FaCircle />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="tour_details_boxed">
              <h3 className="heading_theme">Included/Excluded</h3>
              <div className="tour_details_boxed_inner">
                <p>
                  Stet clitaStet clita kasd gubergren, no sea takimata sanctus
                  est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod.
                </p>
                <ul>
                  {includedItems.map((item, index) => (
                    <li key={index}>
                      <FaCircle />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="tour_details_boxed">
              <h3 className="heading_theme ">Frequently Asked Questions</h3>
              <div className="tour_details_boxed_inner mt-2">
              <Accordion id="accordionExample" activeKey={activeItem}>
              <AccordionItem eventKey={1}>
                <Accordion.Header onClick={() => handleAccordionItemClick(1)}>
                  Stet clita kasd gubergren, no sea takimata sanctus est
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <FaCircle />
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form
                    </li>
                    <li>
                      <FaCircle />
                      Contrary to popular belief, Lorem Ipsum is not simply random
                    </li>
                    <li>
                      <FaCircle />
                      Many desktop publishing packages and web page editors now use
                    </li>
                    <li>
                      <FaCircle />
                      Lorem Ipsum is that it has a more-or-less normal distribution
                      of letters, to using 'Content here
                    </li>
                    <li>
                      <FaCircle />
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested.
                    </li>
                  </ul>
                </Accordion.Body>
              </AccordionItem>
              <AccordionItem eventKey={2}>
                <Accordion.Header onClick={() => handleAccordionItemClick(2)}>
                  Voluptate esse eiusmod aliquip reprehenderit ut ipsum duis
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <FaCircle />
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form
                    </li>
                    <li>
                      <FaCircle />
                      Lorem Ipsum is that it has a more-or-less normal distribution
                      of letters, to using 'Content here
                    </li>
                    <li>
                      <FaCircle />
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested.
                    </li>
                  </ul>
                </Accordion.Body>
              </AccordionItem>
              <AccordionItem eventKey={3}>
                <Accordion.Header onClick={() => handleAccordionItemClick(3)}>
                  Enim veniam reprehenderit quis irure est aliqua do minim
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <FaCircle />
                      Contrary to popular belief, Lorem Ipsum is not simply random
                    </li>
                    <li>
                      <FaCircle />
                      Many desktop publishing packages and web page editors now use
                    </li>
                    <li>
                      <FaCircle />
                      Lorem Ipsum is that it has a more-or-less normal distribution
                      of letters, to using 'Content here
                    </li>
                    <li>
                      <FaCircle />
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested.
                    </li>
                  </ul>
                </Accordion.Body>
              </AccordionItem>
              <AccordionItem eventKey={4}>
                <Accordion.Header onClick={() => handleAccordionItemClick(4)}>
                  Laborum elit ad ea do labore minim magna id. Tempor consequat
                  cillum
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <FaCircle />
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form
                    </li>
                    <li>
                      <FaCircle />
                      Contrary to popular belief, Lorem Ipsum is not simply random
                    </li>
                    <li>
                      <FaCircle />
                      Many desktop publishing packages and web page editors now use
                    </li>
                    <li>
                      <FaCircle />
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested.
                    </li>
                  </ul>
                </Accordion.Body>
              </AccordionItem>
            </Accordion>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tour_details_right_sidebar_wrapper">
              <div className="tour_detail_right_sidebar">
                <div className="tour_details_right_boxed">
                  <div className="tour_details_right_box_heading">
                    <h3>Electronic visa (Male with Family)</h3>
                  </div>
                  <div className="valid_date_area">
                    <div className="valid_date_area_one">
                      <h5>Valid from</h5>
                      <p>01 Feb 2022</p>
                    </div>
                    <div className="valid_date_area_one">
                      <h5>Valid till</h5>
                      <p>15 Feb 2022</p>
                    </div>
                  </div>
                  <div className="tour_package_details_bar_list">
                    <h5>Package details</h5>
                    <ul>
                      <li>
                        <FaCircle />
                        Buffet breakfast as per the Itinerary
                      </li>
                      <li>
                        <FaCircle />
                        Visit eight villages showcasing Polynesian culture
                      </li>
                      <li>
                        <FaCircle />
                        Complimentary Camel safari, Bonfire,
                      </li>
                      <li>
                        <FaCircle />
                        All toll tax, parking, fuel, and driver allowances
                      </li>
                      <li>
                        <FaCircle />
                        Comfortable and hygienic vehicle
                      </li>
                    </ul>
                  </div>
                  <div className="tour_package_details_bar_price">
                    <h5>Price</h5>
                    <div className="tour_package_bar_price">
                      <h6>
                        <del>$ 35,500</del>
                      </h6>
                      <h3>
                        $ 30,500 <sub>/Per serson</sub>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="tour_select_offer_bar_bottom">
                  <button
                    className="btn btn_theme btn_md w-100"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    fdprocessedid="d3idp"
                  >
                    Select offer
                  </button>
                </div>
              </div>
              <div className="tour_detail_right_sidebar">
                <div className="tour_details_right_boxed">
                  <div className="tour_details_right_box_heading">
                    <h3>Student visa</h3>
                  </div>
                  <div className="valid_date_area">
                    <div className="valid_date_area_one">
                      <h5>Valid from</h5>
                      <p>01 Feb 2022</p>
                    </div>
                    <div className="valid_date_area_one">
                      <h5>Valid till</h5>
                      <p>15 Feb 2022</p>
                    </div>
                  </div>
                  <div className="tour_package_details_bar_list">
                    <h5>Package details</h5>
                    <ul>
                      <li>
                        <FaCircle />
                        Buffet breakfast as per the Itinerary
                      </li>
                      <li>
                        <FaCircle />
                        Visit eight villages showcasing Polynesian culture
                      </li>
                      <li>
                        <FaCircle />
                        Complimentary Camel safari, Bonfire,
                      </li>
                      <li>
                        <FaCircle />
                        All toll tax, parking, fuel, and driver allowances
                      </li>
                      <li>
                        <FaCircle />
                        Comfortable and hygienic vehicle
                      </li>
                    </ul>
                  </div>
                  <div className="tour_package_details_bar_price">
                    <h5>Price</h5>
                    <div className="tour_package_bar_price">
                      <h6>
                        <del>$ 35,500</del>
                      </h6>
                      <h3>
                        $ 30,500 <sub>/Per serson</sub>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="tour_select_offer_bar_bottom">
                  <button
                    className="btn btn_theme btn_md w-100"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    fdprocessedid="xf7n1q"
                  >
                    Select offer
                  </button>
                </div>
              </div>
              <div className="tour_detail_right_sidebar">
                <div className="tour_details_right_boxed">
                  <div className="tour_details_right_box_heading">
                    <h3>Business visa</h3>
                  </div>
                  <div className="valid_date_area">
                    <div className="valid_date_area_one">
                      <h5>Valid from</h5>
                      <p>01 Feb 2022</p>
                    </div>
                    <div className="valid_date_area_one">
                      <h5>Valid till</h5>
                      <p>15 Feb 2022</p>
                    </div>
                  </div>
                  <div className="tour_package_details_bar_list">
                    <h5>Package details</h5>
                    <ul>
                      <li>
                        <FaCircle />
                        Buffet breakfast as per the Itinerary
                      </li>
                      <li>
                        <FaCircle />
                        Visit eight villages showcasing Polynesian culture
                      </li>
                      <li>
                        <FaCircle />
                        Complimentary Camel safari, Bonfire,
                      </li>
                      <li>
                        <FaCircle />
                        All toll tax, parking, fuel, and driver allowances
                      </li>
                      <li>
                        <FaCircle />
                        Comfortable and hygienic vehicle
                      </li>
                    </ul>
                  </div>
                  <div className="tour_package_details_bar_price">
                    <h5>Price</h5>
                    <div className="tour_package_bar_price">
                      <h6>
                        <del>$ 35,500</del>
                      </h6>
                      <h3>
                        $ 30,500 <sub>/Per serson</sub>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="tour_select_offer_bar_bottom">
                  <button
                    className="btn btn_theme btn_md w-100"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    fdprocessedid="zkbfoe"
                  >
                    Select offer
                  </button>
                </div>
              </div>
              <div className="tour_detail_right_sidebar">
                <div className="tour_details_right_boxed">
                  <div className="tour_details_right_box_heading">
                    <h3>Why choose us</h3>
                  </div>

                  <div className="tour_package_details_bar_list first_child_padding_none">
                    <ul>
                      <li>
                        <FaCircle />
                        Buffet breakfast as per the Itinerary
                      </li>
                      <li>
                        <FaCircle />
                        Visit eight villages showcasing Polynesian culture
                      </li>
                      <li>
                        <FaCircle />
                        Complimentary Camel safari, Bonfire,
                      </li>
                      <li>
                        <FaCircle />
                        All toll tax, parking, fuel, and driver allowances
                      </li>
                      <li>
                        <FaCircle />
                        Comfortable and hygienic vehicle
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        </div>
      </Container>
    </div>
  );
}
