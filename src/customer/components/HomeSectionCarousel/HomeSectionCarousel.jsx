import React, { useRef } from 'react';
import HomeSectionCart from '../HomeSectionCart/HomeSectionCart';
import AliceCarousel from 'react-alice-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function HomeSectionCarousel({ data, sectionName }) {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.slice(0, 10).map((item, index) => <HomeSectionCart key={index} props={item} />);

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext(); // Move to the next item in the carousel
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev(); // Move to the previous item in the carousel
    }
  };

  return (
    <div className='relative px-4'>
      <h2 className='text-4xl font-extrabold text-gray-800 py-5 text-left'>
        {sectionName}
      </h2>
      <div className='relative p-5'>
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
        />

        {/* Left Button */}
        <button
          onClick={handlePrevClick}
          className='z-50 absolute top-1/2 left-3 transform -translate-y-1/2 bg-blue-500 rounded-full flex items-center justify-center'
          aria-label='previous'
          style={{ width: '40px', height: '40px' }}
        >
          <ArrowBackIosIcon style={{ color: 'white' }} />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNextClick}
          className='z-50 absolute top-1/2 right-3 transform -translate-y-1/2 bg-blue-500 rounded-full flex items-center justify-center'
          aria-label='next'
          style={{ width: '40px', height: '40px' }}
        >
          <ArrowForwardIosIcon style={{ color: 'white' }} />
        </button>
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
