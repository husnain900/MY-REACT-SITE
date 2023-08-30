import React from "react";
import Bannar from "../HomePageOne/FrontPage/banner";
import BigBox from "../HomePageOne/FrontPage/BigBox";
import CardSectionOne from "../HomePageOne/GoBeyond/GoBeyond";
import CardSectionTwo from "../HomePageOne/TopDestinations/TopDestinations";
import CardSectionThree from "../HomePageOne/ExploreOur/ExploreSec";
import CardSectionFour from "../HomePageOne/OfferAreaSection/OfferAreaSection";
import CardSectionFive from "../HomePageOne/OurBestCardSection/OurBestCards";
import DestinationCards from "../HomePageOne/DestinationCards/DestinationCards";
import GridCardSection from "../HomePageOne/LatestCardSection/GridCardSection";

const index = () => {
  return (
    <div>
      <Bannar />
      <BigBox />
      <CardSectionOne />
      <CardSectionTwo />
      <CardSectionThree />
      <CardSectionFour />
      <CardSectionFive />
      <DestinationCards />
      <GridCardSection />
    </div>
  );
};

export default index;
