import React from "react";
import "../Cards/style.css";
const services = [
  {
    icon: "Pages-About-img/world.png",
    title: "Best services",
    description:
      "Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit. Incididunt ut dolore.",
  },
  {
    icon: "Pages-About-img/walte.png",
    title: "Trusted payment",
    description:
      "Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit. Incididunt ut dolore.",
  },
  {
    icon: "Pages-About-img/star.png",
    title: "Top facility",
    description:
      "Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit. Incididunt ut dolore.",
  },
  {
    icon: "Pages-About-img/persentis.png",
    title: "Awesome deals",
    description:
      "Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit. Incididunt ut dolore.",
  },
];

const index = () => {
  return (
    <div className="Cards">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 col-12" key={index}>
              <div className="about_service_boxed">
                <img src={service.icon} alt="img" />
                <h5>
                  <a href="/">{service.title}</a>
                </h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
