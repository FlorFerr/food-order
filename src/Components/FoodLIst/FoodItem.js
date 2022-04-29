import React from 'react';
import FoodCount from './FoodCount';
import './FoodItem.css';

const FoodItem = (props) => {
  return (
      <>
    <div>
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
        <h3>${props.price}</h3>
    </div>
    <FoodCount />
    </>
  )
}

export default FoodItem