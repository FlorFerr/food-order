

import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import Modal from '../UI/Modal';
import './Cart.css'

const Cart = (props) => {

    const {cart} = useContext(CartContext)
    console.log(cart[0])

    //const cartItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}]




  return (
    <Modal onClose={props.onClose}>
        <ul className='cart-items'>
            {cart.map((item) => { return (
                
                <li key={item.id}>{item.name} {item.price} </li>
                
                )
            })}
        </ul>
        <div className='total'>
            <span>Total Amount</span>
            <span>$35.62</span>
        </div>
        <div className='actions'>
            <button onClick={props.onClose} className='button--alt'>Close</button>
            <button className='button' >Order</button>
        </div>
    </Modal>
  )
}

export default Cart