import React, { useState, useEffect } from "react";
import "../Consultation/style.css";

const counters = [
  {
    icon: "Pages-About-img/user.png",
    count: 2348,
    title: "Partners",
  },
  {
    icon: "Pages-About-img/bank.png",
    count: 1748,
    title: "Listed property",
  },
  {
    icon: "Pages-About-img/world-map.png",
    count: 4287,
    title: "Destinations",
  },
  {
    icon: "Pages-About-img/calander.png",
    count: 40,
    title: "Booking",
  },
];

const Index = () => {
  const [countersData, setCountersData] = useState(counters);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountersData((prevCountersData) =>
        prevCountersData.map((counter) => ({
          ...counter,
          count: counter.count + 1,
        }))
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="section_padding_bottom consultation_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="consultation_area_text">
                <h2>Have you any question? Get A Consultation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="counter_area_wrapper">
                <div className="row">
                  {countersData.map((counter, index) => (
                    <div
                      className="col-lg-3 col-md-6 col-sm-12 col-12"
                      key={index}
                    >
                      <div className="counter_item">
                        <img src={counter.icon} alt="icon" />
                        <h3 className="counter">{counter.count}</h3>
                        <h6>{counter.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
