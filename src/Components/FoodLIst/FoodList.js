import React from 'react';
import './FoodList.css'
import FoodItem from './FoodItem';

const FoodList = () => {

    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];
  return (

    <div>
        {
            DUMMY_MEALS.map((f=><FoodItem key={f.id} name={f.name} description={f.description} price={f.price}></FoodItem>))
        }
    </div>
  )
}

export default FoodList