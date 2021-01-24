
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_TO_FASTGIFT,REMOVE_ITEM_FASTGIFT,OPEN_DETAILS} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
export const open_details= (id)=>{
    return{
        type: OPEN_DETAILS,
        id
    }
}
//add to fastgift
export const addToFastGift= (id)=>{
    return{
        type: ADD_TO_FASTGIFT,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
export const removeItemFastGift=(id)=>{
    return{
        type: REMOVE_ITEM_FASTGIFT,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}