import React from "react";
import AboutUs from "../Pages-AboutPage/AboutUs/index";
import ThailandImgs from "../Pages-AboutPage/ThailandImgs/index";
import Cards from "../Pages-AboutPage/Cards/index";
import Consultation from '../Pages-AboutPage/Consultation/index';
import ProfileCards from '../Pages-AboutPage/ProfileCards/index'
const index = () => {
  return (
    <div>
      <AboutUs />
      <ThailandImgs />
      <Cards />
      <Consultation />
      <ProfileCards/>
    </div>
  );
};

export default index;
