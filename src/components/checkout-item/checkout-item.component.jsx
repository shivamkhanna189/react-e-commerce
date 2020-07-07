import React from "react"
import { clearCartItem,addItem,removeItem } from "../../redux/cart/cart.action";
import {connect} from "react-redux"
import {CheckOutItemContainer,ImageContainer,TextContainer,QuantityContainer,RemoveButtonContainer} from "./checkout-item.style"

const CheckOutItem = ({cartItem , clearCartItem, removeItem,addItem})=>{
    const {imageUrl,name,quantity,price} = cartItem ; 
    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <img alt="item" src={imageUrl} />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div  onClick={()=>removeItem(cartItem)}>&#10094;</div>
                    <span >{quantity}</span>
                <div  onClick={()=>addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={
                ()=>clearCartItem(cartItem)
            }>&#10005;</RemoveButtonContainer>
    
        </CheckOutItemContainer>
    )
}


const mapDispatchToProps = dispatch =>({
    clearCartItem : cartItem =>dispatch(clearCartItem(cartItem)),
    removeItem : cartItem=>dispatch(removeItem(cartItem)),
    addItem : cartItem=>dispatch(addItem(cartItem)),
})

export default connect(null,mapDispatchToProps)(CheckOutItem) ; 