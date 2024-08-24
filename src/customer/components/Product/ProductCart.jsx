import React from 'react'
import './ProductCart.css'

function ProductCart() {
  return (
    <div className='productCart w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
     
        <img className='h-full w-full object-cover object-left-top'
        src="https://nilsonline.lk/image/cache/catalog/nils/product/046007139/18-612x875.jpg"
        alt=''/>
        </div>
        <div className='textPart bg-white p-3'>
          <div>
            <p className='font-bold opacity-60'>Universalsaloutfit</p>
            <p> Casual puff sleeeves  soid women white tp</p>
          </div>
          <div className='flex items-center spax'>
            <p className='font-semmibold'>RS.1500.00</p>
            <p className='line-through opacity-50'>RS.2500.00</p>
            <p className='text-green-600 font-semibold'>70% off</p>
          </div>

        </div>
      
      
    </div>
  )
}

export default ProductCart
