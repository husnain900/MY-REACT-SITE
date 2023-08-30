import React from 'react'
import PageContent from '../Categories-VisaPage/VisaPageContent/PageContent';
import VisaContentTwo from '../Categories-VisaPage/VisaPageSectionTwo/VisaContentTwo';
import AllReviewCards from '../Categories-VisaPage/AllReviewCards/AllReviewCards';
import SlidersCards from '../Categories-VisaPage/SliderCards/SlidersCards';

const index = () => {
  return (
    <div>
      <PageContent/>
      <VisaContentTwo/>
      <AllReviewCards/>
      <SlidersCards/>
    </div>
  )
}

export default index
