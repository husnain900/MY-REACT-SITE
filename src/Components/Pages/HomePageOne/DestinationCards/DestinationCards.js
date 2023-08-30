import React, { useState } from "react";
import "./DestinationCards.css";
import Button from "react-bootstrap/Button";

const cards = [
  {
    id: 1,
    Image: "assets/img/CardSectionFive/destination-small1.png",
    Title: "Everest trek to Base Camp",
    price: "Price starts at $105.00",
  },
  {
    id: 2,
    Image: "assets/img/CardSectionFive/destination-small2.png",
    Title: "Kathmundu tour",
    price: "Price starts at $85.00",
  },

  {
    id: 3,
    Image: "assets/img/CardSectionFive/destination-small3.png",
    Title: "Beautiful pokhara",
    price: "Price starts at $100.00",
  },
  {
    id: 4,
    Image: "assets/img/CardSectionFive/destination-small4.png",
    Title: "Annapurna region",
    price: "Price starts at $75.00",
  },

  {
    id: 5,
    Image: "assets/img/CardSectionFive/destination-small5.png",
    Title: "Chitwan national park",
    price: "Price starts at $105.00",
  },

  {
    id: 6,
    Image: "assets/img/CardSectionFive/destination-small6.png",
    Title: "Langtang region",
    price: "Price starts at $105.00",
  },
];

const tabs = [
  { id: 1, label: "Nepal" },
  { id: 2, label: "Malaysia" },
  { id: 3, label: "Indonesia" },
  { id: 4, label: "Turkey" },
  { id: 5, label: "China" },
  { id: 6, label: "Darjeeling" },
  { id: 7, label: "Italy" },
];

export default function BtnSection() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="destination-section">
      <div className="title text-center">
        <h2 className="text-dark pb-1">Destinations for you </h2>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="border-btn">
              <div className="d-flex flex-wrap justify-content-between box-btn">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={
                      activeTab === tab.id ? "primary" : "/"
                    }
                    onClick={() => handleTabClick(tab.id)}
                    className="custom-button"
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          {cards.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 " key={item.id}>
              <div className="container tab-pane fade show active">
                <div className="">
                  <div className="tab_destinations_boxed">
                    <div className="tab_destinations_img">
                      <img src={item.Image} alt="" />
                    </div>
                    <div className="tab_destinations_conntent">
                      <h3>
                        <a>{item.Title}</a>
                      </h3>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
