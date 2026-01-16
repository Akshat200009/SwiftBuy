import { createSlice } from "@reduxjs/toolkit"
export const cartSlice = createSlice(
    {
        name:"cart",
        initialState:[],
        reducers:
        {
            AddItem:(state,actions)=>
            {
                state.push(actions.payload)
            },
            RemoveItem:(state,actions)=>
            {  
              return state.filter((item)=>
              (
                    item.id!==(actions.payload)
              ))
            }
        }
    })
    export const {AddItem,RemoveItem}= cartSlice.actions
    export default cartSlice.reducer