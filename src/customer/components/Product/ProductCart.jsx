import React from 'react'
import './ProductCart.css'

function ProductCart({Product}) {
  return (
    <div className='productCart w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
     
        <img className='h-full w-full object-cover object-left-top'
        src={Product.imageUrl}
        alt=''/>
        </div>
        <div className='textPart bg-white p-3'>
          <div>
            <p className='font-bold opacity-60'>Universalsaloutfit</p>
            <p> Casual puff sleeeves  soid women white tp</p>
          </div>
          <div className='flex items-center spax'>
            <p className='font-semmibold'>RS.{Product.discountedPrice}</p>
            <p className='line-through opacity-50'>{Product.price}</p>
            <p className='text-green-600 font-semibold'>{Product.discountPersent}%</p>
          </div>

        </div>
      
      
    </div>
  )
}

export default ProductCart
