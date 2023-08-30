import React, { useState } from "react";
import "./bannar.css";
import Button from "react-bootstrap/Button";
import { FaPlaneDeparture, FaGlobe, FaHotel, FaPassport, FaBuilding, FaBus, FaShip ,FaPlaneArrival , FaExchangeAlt} from 'react-icons/fa';

export default function BigBox() {
  const [activeTab, setActiveTab] = useState("flights");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="big-box">
        <div className="d-flex gap-4 flex-wrap box-btn">
          <button
            className={`btn ${activeTab === "flights" ? "active" : ""}`}
            onClick={() => handleTabClick("flights")}
          >
            <FaPlaneDeparture className="me-1" />
            Flights
          </button>
          <button
            className={`btn ${activeTab === "tour" ? "active" : ""}`}
            onClick={() => handleTabClick("tour")}
          >
            <FaGlobe className="me-1" />
            Tour
          </button>
          <button
            className={`btn ${activeTab === "hotels" ? "active" : ""}`}
            onClick={() => handleTabClick("hotels")}
          >
            <FaHotel className="me-1" />
            Hotels
          </button>
          <button
            className={`btn ${activeTab === "visa" ? "active" : ""}`}
            onClick={() => handleTabClick("visa")}
          >
            <FaPassport className="me-1" />
            Visa
          </button>
          <button
            className={`btn ${activeTab === "apartments" ? "active" : ""}`}
            onClick={() => handleTabClick("apartments")}
          >
            <FaBuilding className="me-1" />
            Apartments
          </button>
          <button
            className={`btn ${activeTab === "bus" ? "active" : ""}`}
            onClick={() => handleTabClick("bus")}
          >
            <FaBus className="me-1" />
            Bus
          </button>
          <button
            className={`btn ${activeTab === "cruise" ? "active" : ""}`}
            onClick={() => handleTabClick("cruise")}
          >
            <FaShip className="me-1" />
            Cruise
          </button>
        </div>

        <div className="d-flex justify-content-center btn-2 my-4 py-1">
        <Button variant="/">One Way</Button>
        <Button variant="/">Roundtrip</Button>
          <Button variant="/">Multi city</Button>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="mini-box ">
              <div className="d-flex justify-content-between">
                <p> From</p>
                <div className="icon pe-3">
                  <FaPlaneDeparture />
                </div>
              </div>
              <h4>New York</h4>
              <span className="pt-2">
                JFK - John F. Kennedy International...
              </span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="mini-box mt-3 mt-lg-0 mt-md-0 mt-xl-0">
              <div className="d-flex justify-content-between">
                <p> To</p>
                <div className="icon pe-3">
                  <FaPlaneArrival />
                </div>
              </div>
              <h4>London</h4>
              <span className="pt-2">LCY, London city airport</span>
              <div className="range_plan">
                <FaExchangeAlt />
              </div>
            </div>
          </div>

          <div className="col-lg-4  col-md-6 col-sm-12 col-12">
            <div className="form_search_date mt-3 mt-lg-0 mt-md-3 mt-xl-0">
              <div className="mini-box date_flex_area">
                <div className="Journey_date">
                  <p>Journey date</p>
                  <input
                    className="passenger"
                    type="date"
                    value="2022-05-05"
                  />
                  <br />
                  <span>Thursday</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2  col-md-6 col-sm-12 col-12">
            <div className="mini-box mt-3 mt-lg-0 mt-md-3 mt-xl-0">
              <div>
                <p>Passenger, Class</p>
                <h4 className="pt-2">0 Passenger</h4>
                <span className="pt-2">Business</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn_theme btn_md main-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
