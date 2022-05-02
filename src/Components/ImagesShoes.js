import React from 'react'
import '../Styles/ImagesShoes.css'
import shoe1Big from '../Images/image-product-1.jpg'
import shoe2Big from '../Images/image-product-2.jpg'
import shoe3Big from '../Images/image-product-3.jpg'
import shoe4Big from '../Images/image-product-4.jpg'
import shoe1Small from '../Images/image-product-1-thumbnail.jpg'
import shoe2Small from '../Images/image-product-2-thumbnail.jpg'
import shoe3Small from '../Images/image-product-3-thumbnail.jpg'
import shoe4Small from '../Images/image-product-4-thumbnail.jpg'

const ImagesShoes = () => {
  return (
     <>
     <section>
          <div className='shoesBig'>
              <img alt='Shoes' src={shoe1Big}/>
          </div>
          <div className='shoesSmall'>
              <img alt='Shoes' src={shoe1Small}/>
              <img alt='Shoes' src={shoe2Small}/>
              <img alt='Shoes' src={shoe3Small}/>
              <img alt='Shoes' src={shoe4Small}/>
          </div>
     </section>
     </>
  )
}

export default ImagesShoes