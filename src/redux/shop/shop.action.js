
import {shopActionTypes} from "./shop.type" ;

export const SetShopData = (data)=>({
    type : shopActionTypes.SET_SHOP_DATA,
    payload : data 
})