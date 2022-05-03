

import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import Modal from '../UI/Modal';
import './Cart.css'

const Cart = (props) => {

    const {cart, total} = useContext(CartContext)
    

    //const cartItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}]

    const hasItems = cart.length > 0




  return (

    
    <Modal onClose={props.onClose}>

        {!hasItems ? <h2>No hay productos en el carrito</h2> :
        
        <>
        <ul className='cart-items'>
            {cart.map((item) => { return (
                
                <li key={item.id}>{item.name} ${item.price} x{item.cantidad}</li>
                
                )
            })}
        </ul>
        <div className='total'>
            <span>Total Amount</span>
            <span>${total.toFixed(2)}</span>
        </div>
        <div className='actions'>
            <button onClick={props.onClose} className='button--alt'>Close</button>
            
        </div></>}
    </Modal>
  )
}

export default Cart