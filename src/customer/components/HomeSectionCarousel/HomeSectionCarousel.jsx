import React, { useRef } from 'react';
import HomeSectionCart from '../HomeSectionCart/HomeSectionCart';
import AliceCarousel from 'react-alice-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; // Import for left arrow

function HomeSectionCarousel() {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCart key={item} />);

  const handleNextClick = () => {
    carouselRef.current.slideNext(); // Move to the next item in the carousel
  };

  const handlePrevClick = () => {
    carouselRef.current.slidePrev(); // Move to the previous item in the carousel
  };

  return (
    <div className='relative px-4 lg:px-8'>
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
          className='z-50 absolute top-60 left-3 transform bg-blue-500 rounded-full flex items-center justify-center'
          aria-label='previous'
          style={{ width: '40px', height: '40px' }} // Ensure the button is square
        >
          <ArrowBackIosIcon style={{ color: 'white' }} />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNextClick}
          className='z-50 absolute top-60 right-12 transform bg-blue-500 rounded-full flex items-center justify-center'
          aria-label='next'
          style={{ width: '40px', height: '40px' }} // Ensure the button is square
        >
          <ArrowForwardIosIcon style={{ color: 'white' }} />
        </button>
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
