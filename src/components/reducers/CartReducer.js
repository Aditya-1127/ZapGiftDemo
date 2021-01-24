import Item1 from '../../images/Belvedere.png'
import Item2 from '../../images/corona.jpg'
import Item3 from '../../images/CaptainM.png'
import Item4 from '../../images/Chandonclassic.png'
import Item5 from '../../images/Chandonrose.png'
import Item6 from '../../images/Dewars.png'
import Item7 from '../../images/jameson.png'
import Item8 from '../../images/laphroy.png'
import Item9 from '../../images/monkeyshoulder.png'
import Item10 from '../../images/Tanqery.png'
import Item11 from '../../images/corona.jpg'

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,ADD_TO_FASTGIFT } from '../actions/action-types/cart-actions'


const initState = {
    items: [ 
        {id:1,title:'Belvedere', desc: "Vodka", price:200,img:Item1,link:"index.html"},
        {id:2,title:'Corona', desc: "Beer", price:1000,img: Item2,link:"3Dmodel.html"},
        {id:3,title:'Captain Morgan', desc: "Rum",price:6200,img: Item3,link:"index.html"},
        {id:4,title:'Chandon Classic', desc: "Champagne", price:100,img:Item4,link:"3Dmodel.html"},
        {id:5,title:'Chandon Rose', desc: "Champagne", price:4500,img: Item5,link:"Try02_XR.664.html"},
        {id:6,title:'Dewars', desc: "Whiskey",price:9000,img: Item6,link:"3Dmodel.html"},
        {id:7,title:'Jameson', desc: "Whiskey", price:500,img:Item7,link:"index.html"},
        {id:8,title:'Laphroy', desc: "Whiskey", price:1030,img: Item8,link:"Try02_XR.664.html"}, 
        {id:9,title:'Monkey Shoulder', desc: "Whiskey",price:3200,img: Item9,link:"Try02_XR.664.html"},
        {id:10,title:'Tanquery', desc: "Gin", price:800,img:Item10,link:"3Dmodel.html"},
        {id:11,title:'Test Bottle', desc: "Beer", price:120,img:Item11,link:"index.html"},
    ],
    addedItems:[],
    total: 0,
    flag:0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }



    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer