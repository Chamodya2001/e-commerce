import React from "react";
import MainCarousal from "../../HomeCarousel/MainCarousal";
import HomeSectionCarousel from "../../HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../data/Men/men_kurta";

function HomePage() {
  return (
    <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
      <MainCarousal />

      <div className="space-y-10">
        {/* Adding border and shadow to HomeSectionCarousel */}
        <div className="border border-gray-300 rounded-lg shadow-md p-4">
          <HomeSectionCarousel data={mens_kurta} sectionName={"men's kurta"} />
        </div>
        <div className="border border-gray-300 rounded-lg shadow-md p-4">
          <HomeSectionCarousel data={mens_kurta} sectionName={"men's shirt"} />
        </div>
        <div className="border border-gray-300 rounded-lg shadow-md p-4">
          <HomeSectionCarousel data={mens_kurta} sectionName={"women' saree"} />
        </div>
        <div className="border border-gray-300 rounded-lg shadow-md p-4">
          <HomeSectionCarousel data={mens_kurta} sectionName={"children"} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
