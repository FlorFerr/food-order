import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import './CartItem.css';

const CartItem = (props) => {

  /*const { cart } = useContext(CartContext)

  const incrementHandler = () => {

    
    const itemsCart = cart.find(item => item.id === 'm1')
    const cantidadItem = Number(itemsCart.cantidad) + 1

    console.log(cantidadItem)
     
   

  }*/

 
  
 
 
  return (
    <li className='cart-item'>
      <div>
        <h2>{props.name}</h2>
        <div className='summary'>
          <span className='price'>${props.price}</span>
          <span className='amount'>x {props.cantidad}</span>
        </div>
      </div>
      <div className='actionsCart'>
        <button >−</button>
        <button >+</button>
      </div>
    </li>
  );
};

export default CartItem;