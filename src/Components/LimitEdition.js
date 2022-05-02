import AddCart from '../Components/AddCart';
import React from "react";
import '../Styles/LimitEdition.css'



const LimitEdition = ({addCart, add, removeCart, addToCart}) => {
  return (
    <section className='section_edition'>

      <span className='sneaker'> Sneaker Company </span>

      <h1 className='h1_limitEdition'> Fall Limited Edition Sneakers </h1>

      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className='container_price'>
        <div className='div_price_container'>
          <span className='span_price'> $125.00 </span>
          <span className='span_discount'> 50% </span>
        </div>

          <div className='discount'>
              <span>$250.00</span>
          </div>
      </div>

          <AddCart addCart={addCart} add={add} removeCart={removeCart} addToCart={addToCart}/>

    </section>
  );
};

export default LimitEdition;
