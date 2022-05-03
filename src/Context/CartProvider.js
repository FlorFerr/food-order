import { useState} from 'react';
import CartContext from './CartContext'


const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const addItemHandler = (item, q) => {
        const isInCart = cart.find(produc =>produc.id === item.id)
        if(!isInCart){
            setCart([...cart,{id: item.id, name: item.name, price: item.price, cantidad: q}])
        }
         

    }

    const removeItemHandler = (id) => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    
  return (
      <CartContext.Provider value={{cartContext, cart}}>
          {props.children}
      </CartContext.Provider>
    
  )
}

export default CartProvider