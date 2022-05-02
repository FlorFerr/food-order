
import './MealForm.css';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

const MealForm = (props) => {
    


  return (
    <form className='form'>
        <Input label='Amount' input={
          {id: 'amount ' + props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1'}
          }/>
        <Button />
    </form>
  )
}

export default MealForm