import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import bg from "../assets/bg0.gif"
import "./Home.css"
import { Category } from '../Category'
import Product from '../Components/Product/Product'
import { dummydata } from '../dummydata'
import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const[cat,setCat]=useState(dummydata)

  function HandleClick(Category)
  {
   const updatedata=dummydata.filter((item)=>
  (
     (item.category===Category)
   ))
   setCat(updatedata)
  }
  return (
    <div className='Home'>
        <div className="bg-image">
            <img src={bg} alt="" />
        </div>
        <div className='Category-Section'>
            {Category.slice(0,5).map((item)=>
            (
              <div className="category-card" onClick={()=>
              {
                HandleClick(item.name)
              }
              }>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </div>
            ))}
        </div>
        <h1>Trending Products</h1>
        <div className='product-section'>
          {cat.slice(0,8).map((item)=>
          (
           <Product name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
           />
          ))}
        </div>
        </div>
  )
}

export default Home