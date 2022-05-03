import React, { useState } from 'react'
import './Input.css'

const Input = (props) => {

   const [cantidad, setCantidad] = useState(1)

   const changeAmountHandler = (e) => {
    
     setCantidad(e.target.value)
   }
  

  return (
    <div >
      <div className='input'>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} onChange={changeAmountHandler}/>
      </div>
      <button type='button' onClick={() => {props.onAdd(cantidad)}}>+ Add</button>
    </div>
  )
}

export default Input