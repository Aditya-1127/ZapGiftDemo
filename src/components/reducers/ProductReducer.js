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
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,OPEN_DETAILS } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Belvedere', desc: "Vodka", price:200,img:Item1},
        {id:2,title:'Corona', desc: "Beer", price:1000,img: Item2},
        {id:3,title:'Captain Morgan', desc: "Rum",price:6200,img: Item3},
        {id:4,title:'Chandon Classic', desc: "Champagne", price:100,img:Item4},
        {id:5,title:'Chandon Rose', desc: "Champagne", price:4500,img: Item5},
        {id:6,title:'Dewars', desc: "Whiskey",price:9000,img: Item6},
        {id:7,title:'Jameson', desc: "Whiskey", price:500,img:Item7},
        {id:8,title:'Laphroy', desc: "Whiskey", price:1030,img: Item8}, 
        {id:9,title:'Monkey Shoulder', desc: "Whiskey",price:3200,img: Item9},
        {id:10,title:'Tanquery', desc: "Gin", price:800,img:Item10},
        {id:11,title:'Test Bottle', desc: "Beer", price:120,img:Item11},
    ],
    openItems:[],
    total: 0,
    flag:0

}

const productReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === OPEN_DETAILS){
          let openItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         
        console.log("Product reducer called")
         
          
          
            
            return{
                ...state,
                openItems: [openItem],
               
            }
            
        
    }


   



 

    
  else{
    return state
    }
    
}

export default productReducer