import SHOP_DATA from "../../pages/shops/shops.data";

const INITIAL_STATE = {
    collections : SHOP_DATA
}

const shopReducer = (state =INITIAL_STATE,action)=>{
    switch(action){
        default :
            return state ; 
    }
}

export default shopReducer

