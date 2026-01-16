import React from 'react'
import { FaShopify } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../redux/CartSlice';
 


const Navbar = () => {
  const value = useSelector(state=>state)
  return (
    <div className='Nav'>
        <div className='top-nav'>
            <div className='logo'>
              <span>SwiftBuy</span>
              <FaShopify />
       </div>
        <form className="search-box">
            <input type="text" placeholder="Search Items..." />
            <button><IoSearchOutline /></button>
        </form>
       <div className='cart'>
        <Link to='/Cart'><IoCartOutline /></Link>
        <span>{value.cart.length}</span>
       </div>
        </div>
        <div className='bottom-nav'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Shop'><li>Shop</li></Link>
           <Link to='/Cart'><li>Cart</li></Link> 
           <Link to='/Contact'><li>Contact</li></Link> 
        </div>
    </div>
  )
}

export default Navbar