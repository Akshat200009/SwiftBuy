import React from 'react'
import './Product.css'
import {useDispatch} from 'react-redux'
import { AddItem } from '../../redux/CartSlice'
import { toast } from 'react-toastify'

const Product = ({name,image,price,id}) => {
  const dispatch = useDispatch()
  return (
    <div className='product'>
     <img src={image} alt="" />
     <div className='product-details'>
     <span className='name'>{name}</span>
     <span className='price'>{price}</span>
     <button onClick={()=>
      {
        dispatch(AddItem({name:name,price:price,id:id,image:image}))
        toast.success("Item added to cart successfully!");
      }
     }
     >Add+</button>
     </div>
    </div>
  )
}

export default Product