import React from "react";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selector";
import {withRouter} from "react-router-dom";
import toggleCartDropdown from "../../redux/cart/cart.action";

import {CartDropdownContainer,CartItemsContainer,Button,emptyMessage} from "./cart-dropdown.style"

const CartDropdown = ({cartItems, history,dispatch})=>{
    return(
        <CartDropdownContainer >
            <CartItemsContainer>
                {
                    cartItems.length ?
                    cartItems.map(item=>(<CartItem key={item.id} item={item}></CartItem>))  :
                    <emptyMessage> Your cart list is empty. </emptyMessage>
                }
                    
            </CartItemsContainer>
            <Button onClick = {()=>{
                 history.push("/checkout")
                 dispatch(toggleCartDropdown())
            }}>Check Out </Button>
        </CartDropdownContainer>
    )
}
const mapStateToProps =(state)=>{
    return ({cartItems : selectCartItems(state)})
}

export default withRouter(connect(mapStateToProps)(CartDropdown));



