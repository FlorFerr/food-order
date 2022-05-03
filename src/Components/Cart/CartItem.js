import './CartItem.css';

const CartItem = (props) => {
    console.log(props.name)
 
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