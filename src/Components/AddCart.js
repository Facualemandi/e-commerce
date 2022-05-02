import React from 'react'
import minus from '../Images/icon-minus.svg';
import plus from '../Images/icon-plus.svg';
import cart from '../Images/icon-cart.svg';
import '../Styles/AddToCart.css';

const AddCart = () => {
  return (
     <>
     <section className='section_cart_add'>
             <div className='plusOrMinus'>
                <img alt='Minus' src={minus}/>
                <span> 0 </span>
                <img alt='Plus' src={plus}/>
             </div>
              
              <button className='buttonAdd'>
                  <img className='cartAdd' alt='Cart' src={cart}/>
                  Add to Cart
              </button>

     </section>
     </>
  )
}

export default AddCart