import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selector";

const CartDropdown = ({cartItems})=>(
    <div className="cart-dropdown" >
        <div className="cart-items">
            {
                cartItems.map(item=>(<CartItem key={item.id} item={item}></CartItem>))   
            }
                
        </div>
        <CustomButton>Check Out </CustomButton>
    </div>
)
const mapStateToProps =(state)=>{
    return ({cartItems : selectCartItems(state)})
}

export default connect(mapStateToProps)(CartDropdown);



