import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Navbar_css.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'> 
            <Link to='/'>Home</Link>
            <Link to='/cart'> <AiOutlineShoppingCart size={32}/>  </Link>
         </div>
    </div>
  )
}

export default Navbar