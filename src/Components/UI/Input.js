import React, { useState, useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './Input.css'

const Input = (props) => {

  const {cartContext} = useContext(CartContext)


   const [cantidad, setCantidad] = useState(1)

   const changeAmountHandler = (e) => {
     setCantidad(e.target.value)
   }

   const addItemCant  = ()=>{
    cartContext.cantItem(cantidad)
    const onAdd = () => {
      cartContext.addItem({id: props.id, name: props.name, price: props.price}, cantidad)
    }
    onAdd()
   }

   
  

  return (
    <div >
      <div className='input'>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} onChange={changeAmountHandler}/>
      </div>
      <button type='button' onClick={addItemCant}>+ Add</button>
    </div>
  )
}

export default Input