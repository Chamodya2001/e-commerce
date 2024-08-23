import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { MainCarousalData } from './MainCarousalData';

const MainCarousal = () => {
  const items = MainCarousalData.map((item) => (
    <img 
      key={item.id} 
      className='cursor-pointer1' 
      role='presentation' 
      src={item.image} 
      alt={item.alt || 'Carousel Image'} 
    />
  ));

  return (
    <AliceCarousel
      items={items}
      autoPlay // Corrected to `autoPlay`
      autoPlayInterval={1000}
      disableButtonsControls
      infinite
    />
  );
};

export default MainCarousal;
