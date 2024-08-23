import React from 'react'
import HomeSectionCart from '../HomeSectionCart/HomeSectionCart';
import AliceCarousel from 'react-alice-carousel';

function HomeSectionCarousel() {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },

  };
  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCart />)
  return (
<div  className='relative px-4 lg:px-8'>
<div className='relativep-5'>
      <AliceCarousel
        items={items}
        disableButtonsControls
        infinite
        responsive={responsive}
      />
    </div>
</div>
  )
}

export default HomeSectionCarousel
