import { useState} from 'react';
import CartContext from './CartContext'


const CartProvider = (props) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cant, setCant] = useState(1)

    const cantHandler = (can) => {
        setCant(can)
    }


    const addItemHandler = (item, q) => {
        const isInCart = cart.find(produc =>produc.id === item.id)
        if(!isInCart){
            setCart([...cart,{id: item.id, name: item.name, price: item.price, cantidad: q}])
            setTotal(total + (q*item.price))
        }else{
            const cartAux = cart.map((product=>{
                if(product.id === item.id){
                    product.cantidad = Number(product.cantidad) + Number(q)
                }
                return product
            }))
            setCart(cartAux)
            setTotal(total + (q*item.price))
           
        }
         

    }

    const removeItemHandler = (id) => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        cantItem: cantHandler
    }

    
  return (
      <CartContext.Provider value={{cartContext, cart, total, cant}}>
          {props.children}
      </CartContext.Provider>
    
  )
}

export default CartProvider