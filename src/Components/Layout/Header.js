import React from 'react';
import './Header.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShow}/>
    </header>
  )
}

export default Header