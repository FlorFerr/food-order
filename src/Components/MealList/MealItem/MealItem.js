import React from 'react';
import MealForm from '../MealForm/MealForm';
import './MealItem.css';

const MealItem = (props) => {
  return (
    <>
      <div className='meal'>
          <div >
              <h2>{props.name}</h2>
              <p className='description'>{props.description}</p>
              <h3 className='price'>${props.price}</h3>
          </div>
          <MealForm id={props.id} name={props.name} price={props.price}></MealForm>
      </div>
     
    </>
  )
}

export default MealItem