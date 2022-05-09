import React, { useEffect, useState } from 'react';
import './MealList.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const MealList = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchMeals = async () => {
      const response = await fetch('https://foodorder-665d5-default-rtdb.firebaseio.com/Meals.json')
    
      const responseData = await response.json()
      

    const loadedMeals = []

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price
      })}
      
      setMeals(loadedMeals)
      setIsLoading(false)
      
  } 
  fetchMeals()
  
}


,[])

  const mealsItems = meals.map((f=><MealItem key={f.id} name={f.name} description={f.description} price={f.price} id={f.id}></MealItem>))
  return (

    <Card>

        {isLoading ? <p>Loading...</p>: mealsItems}
        
    </Card>
  )
}

export default MealList