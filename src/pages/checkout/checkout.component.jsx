
import React from "react";
import "./checkout.style.scss";

import {selectCartItems,totalCartAmount} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect" ;
import {connect} from "react-redux"
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
const CheckOutPage = ({cartItems, total})=>(

    
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=><CheckOutItem key={cartItem.id} cartItem={cartItem}></CheckOutItem>)
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        
    
    </div>

)
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : totalCartAmount

})

export default connect(mapStateToProps)(CheckOutPage);
