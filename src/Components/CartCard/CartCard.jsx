import React from 'react'
import { MdDelete } from "react-icons/md";
import "./CartCard.css"
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/CartSlice';
import { toast } from 'react-toastify'


const CartCard = ({id,name,price,image}) => {
  const remove= useDispatch()
  return (
    <div className='Cart-Card'>
        <div className="left-card">
            <img src={image} alt=""/>
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <div className="right-card">
            <button onClick={()=>
              {
                remove(RemoveItem(id))
                 toast.success("Item removed!");
              }
            }>
              Remove
               <MdDelete />
              </button>
        </div>
    </div>
  )
}

export default CartCard