import React from 'react'
import minus from '../Images/icon-minus.svg';
import plus from '../Images/icon-plus.svg';
import cart from '../Images/icon-cart.svg';
import '../Styles/AddToCart.css';

const AddCart = ({addCart, add , removeCart , addToCart}) => {
  return (
     <>
     <section className='section_cart_add'>
             <div className='plusOrMinus'>
                <img className='minus' alt='Minus' src={minus} onClick={removeCart}/>
                <span> {add} </span>
                <img className='plus' alt='Plus' src={plus} onClick={addCart}/>
             </div>
              
              <button className='buttonAdd' onClick={addToCart} >
                  <img className='cartAdd' alt='Cart' src={cart}/>
                  Add to Cart
              </button>

     </section>
     </>
  )
}

export default AddCart