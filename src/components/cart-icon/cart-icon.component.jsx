import React from "react";
import {connect} from "react-redux";
import toggleCartDropdown from "../../redux/cart/cart.action";
import {selectCartItemsCount} from "../../redux/cart/cart.selector";
import {CartItemContainer,ShoppingItemContainer,ItemCountContainer} from "./cart-icon.style"

const CartIcon = ({toggleCartDropdown ,itemCount})=>(
    <CartItemContainer onClick ={()=>(toggleCartDropdown())}>
        <ShoppingItemContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>

    </CartItemContainer>
)
const mapStateToProps = (state)=>{
    return ({
        itemCount :selectCartItemsCount(state)
}) ;

}

const mapDispatchToProps =dispatch=>({
    toggleCartDropdown : ()=>dispatch(toggleCartDropdown())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);