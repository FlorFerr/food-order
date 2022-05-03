import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import MealList from './Components/MealList/MealList';
import CartProvider from './Context/CartProvider';

function App() {
  const [cartVisible, setCartVisible] = useState(false)

  const showCartHandler = () => {
    setCartVisible(true)
  }

  const hideCartHandler = () => {
    setCartVisible(false)
  }



  return (
    <CartProvider>
      {cartVisible && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShow={showCartHandler}></Header>
      <MealList />
    </CartProvider>
  );
}

export default App;
