import { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext';
import Modal from '../UI/Modal';
import './Cart.css'
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
    const [isCheckout, setCheckout] = useState(false)

    const {cart, total} = useContext(CartContext)
    


    const hasItems = cart.length > 0

    
    const orderHandler = () => {
        setCheckout(true)
      }
  
      const submitOrderHandler = (userData) => {
        fetch('https://foodorder-665d5-default-rtdb.firebaseio.com/orders.json', {
          method: 'POST',
          body: JSON.stringify({
            user: userData,
            order: cart
          })
        })
      }



  return (

    
    <Modal onClose={props.onClose}>

        {!hasItems ? <h2>No hay productos en el carrito</h2> :
        
        <>
        <ul className='cart-items'>
            {cart.map((item) => { return (
                
                <CartItem key={item.id} name={item.name} price={item.price} cantidad={item.cantidad} ></CartItem>
                
                )
            })}
        </ul>
        <div className='total'>
            <span>Total Amount</span>
            <span>${total.toFixed(2)}</span>
        </div>
        {isCheckout && <Checkout onClick={props.onClose} onConfirm={submitOrderHandler}/>}
            {!isCheckout &&
             <div className='actions'>
             <button onClick={props.onClose} className='button'>Close</button>
             <button className='button' onClick={orderHandler}>Order</button>
             
         </div>}
        </>}
    </Modal>
  )
}

export default Cart