
import {cartActionTypes} from "./cart.type"
import {addItemsToCart,removeItemsFromCart} from "./cart.util"

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_DROPDOWN :{
                return {
                    ...state,
                    hidden : !state.hidden
                }
        }
        case cartActionTypes.ADD_ITEM :{
            return {
                ...state,
                cartItems : addItemsToCart(state.cartItems,action.payload)
            }
        }
        case cartActionTypes.REMOVE_ITEM :{
            return {
                ...state,
                cartItems :removeItemsFromCart(state.cartItems,action.payload)
            }
        }
        case cartActionTypes.CLEAR_ITEM_FROM_CART :{
            return {
                ...state,
                cartItems : state.cartItems.filter(cartItem=>cartItem.id != action.payload.id)
            }
        }
        default :
            return state ; 
    }
}

export default cartReducer ;
