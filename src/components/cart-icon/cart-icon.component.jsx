import React from "react";
import "./cart-icon.style.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {connect} from "react-redux";
import toggleCartDropdown from "../../redux/cart/cart.action";
import {selectCartItemsCount} from "../../redux/cart/cart.selector";

const CartIcon = ({toggleCartDropdown ,itemCount})=>(
    <div  className="cart-icon" onClick ={()=>(toggleCartDropdown())}>
        <ShoppingIcon 
        className="shopping-icon" />
        <span className="item-count">{itemCount}</span>

    </div>
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