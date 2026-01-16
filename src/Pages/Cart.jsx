import React from 'react'
import "./Cart.css"
import CartCard from '../Components/CartCard/CartCard'
import { useSelector } from 'react-redux'
import img from'../assets/emptycart.png'
import { FaRegFaceSadTear } from "react-icons/fa6";
import { dummydata } from '../dummydata'



const Cart = () => {
    let item = useSelector(state=>state)
    console.log(item.cart)
    let total = item.cart.reduce((a,b)=>a+(b.price),0)
  return (
    <div className='Cart'>
     {item.cart.length<=0?<div className='img'>
        <img src={img} alt="" />
        <div className='hero'>
        <FaRegFaceSadTear className='icon'/>
        <span>Empty Cart</span>
        </div>
     </div>:
     <div className='cart-section'>
        {item.cart.map((item)=>
        (
          <CartCard name={item.name} price={item.price} image={item.image} id={item.id}/>
        ))
        }
         <div className="price-section">
        <span>Total Products : {item.cart.length}</span>
        <span>Cart Total : {total}</span>
        </div>
     </div>
}

     </div>
  )
}

export default Cart