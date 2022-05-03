
import './MealForm.css';

import Input from '../../UI/Input';

const MealForm = (props) => {

  const onAdd = ( amount) => {
    
    console.log(amount)
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
          min: '1',
          max: '5'
          }
        }
          />
    </form>
  )
}

export default MealForm