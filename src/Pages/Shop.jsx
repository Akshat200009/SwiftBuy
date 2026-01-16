import React from 'react'
import { useState } from 'react'
import { dummydata } from '../dummydata'
import { Category } from '../Category'
import Product from '../Components/Product/Product'
import { FaShopify } from "react-icons/fa";
import './Shop.css'


const Shop = () => {
     const[cat,setCat]=useState(dummydata)

  function HandleClick(Category)
  {
   if(Category==="All")
  {
    setCat(dummydata)
  }else{
    const updatedata = dummydata.filter((item)=>(item.category===Category)
   )
   setCat(updatedata)
}
  }
  return (
        <div className='shop'>
           <div className='heading'>
            <span>Shop</span> 
             <FaShopify />
        </div>
         <div className='Category-Section'>
                    {Category.map((item)=>
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
                 <div className='product-section'>
          {cat.map((item)=>
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

export default Shop