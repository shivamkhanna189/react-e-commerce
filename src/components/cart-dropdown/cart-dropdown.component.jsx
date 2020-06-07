import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../../components/custom-button/custom-button.component";


const CartDropdown = ()=>(
    <div className="cart-dropdown" >
        <div className="cart-items"></div>
        <CustomButton>Check Out </CustomButton>
    </div>
)

export default CartDropdown;



