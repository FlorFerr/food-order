
import './MealForm.css';

import Input from '../../UI/Input';
import { useContext } from 'react';
import CartContext from '../../../Context/CartContext';

const MealForm = (props) => {

  

  const {cartContext} = useContext(CartContext)

  const onAdd = ( amount) => {
    
    
    

    cartContext.addItem({id: props.id, name: props.name, price: props.price}, amount)
  }


    


  return (
    <form className='form'>
        <Input label='Amount' 
        onAdd={onAdd}
        input={
          {id: 'amount ' + props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
          max: '5'
          }
        }
          />
    </form>
  )
}

export default MealForm