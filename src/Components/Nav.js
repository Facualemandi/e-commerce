import React from 'react'
import logo from '../Images/logo.svg'
import cart from  '../Images/icon-cart.svg'
import iconBurger from '../Images/icon-menu.svg'
import '../Styles/Nav.css'

const Nav = ({add, cartTotal}) => {
  return (
      <>
     <nav className='nav_container'>


         <ul className='ul_container'>

          <img alt='sneakers' src={logo}/>
             <li>Collection</li>
             <li>Men</li>
             <li>Women</li>
             <li>About</li>
             <li>Contact</li>
         </ul>

         <div className='cart'>
           
             {cartTotal ? <p className='totalItemsCart'>{add}</p> : <p></p>}
 
             <img className='imgCart' alt='cart' src={cart}/>

             
             <img className='gmailIcon' alt='gmail' src='https://lh3.googleusercontent.com/ogw/ADea4I73SbBbdyG6FlnYozO4SuIktQTPH5Y3pXA-U136=s32-c-mo'/>

         </div>
           
           <div>
              <img className='iconBurger' alt='icon burger' src={iconBurger}/>
           </div>
     </nav>

     <hr className='hr'/>
     

     </>
  )
}

export default Nav