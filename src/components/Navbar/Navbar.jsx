import React from 'react';
import './navbar.css';
import { useSelector } from "react-redux";

const Navbar = () => {
  const { counter} = useSelector((store) => store.logic);
  return (
    <div className='navContainer'>
        <h3>OnlineBooks</h3>
      <div className='icon-container'>
        <img className="icon" src='/shopping-cart-icon.svg' alt="cart icon" />
        <div className="amount-container">
            <p className="total-amount">{counter}</p>
          </div>
      </div>
    </div>
  )
}

export default Navbar