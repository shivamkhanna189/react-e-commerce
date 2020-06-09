
import {cartActionTypes} from "./cart.type";

const toggleCartDropdown = ()=>({
    type : cartActionTypes.TOGGLE_CART_DROPDOWN
}) 


export const addItem = (item)=>({
    type : cartActionTypes.ADD_ITEM,
    payload : item
})

export default toggleCartDropdown;

