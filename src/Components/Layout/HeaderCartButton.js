import React from 'react';
import './HeaderCartButton.css';
import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Context/CartContext';

const HeaderCartButton = (props) => {
  const {cart} = useContext(CartContext)
  const badge = cart.reduce((a, b) => ( parseInt(a) + parseInt(b.cantidad) ), 0);

  return (
    <button className='button' onClick={props.onShowCart}>
        <span className='icon'>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className='badge'>{badge}</span>
    </button>
  )
}

export default HeaderCartButton