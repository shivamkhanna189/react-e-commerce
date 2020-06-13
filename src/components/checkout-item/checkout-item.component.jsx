import React from "react"
import "./checkout-item.style.scss";
import { clearCartItem,addItem,removeItem } from "../../redux/cart/cart.action";
import {connect} from "react-redux"

const CheckOutItem = ({cartItem , clearCartItem, removeItem,addItem})=>{
    const {imageUrl,name,quantity,price} = cartItem ; 
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={
                ()=>clearCartItem(cartItem)
            }>&#10005;</div>
    
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    clearCartItem : cartItem =>dispatch(clearCartItem(cartItem)),
    removeItem : cartItem=>dispatch(removeItem(cartItem)),
    addItem : cartItem=>dispatch(addItem(cartItem)),
})

export default connect(null,mapDispatchToProps)(CheckOutItem) ; 