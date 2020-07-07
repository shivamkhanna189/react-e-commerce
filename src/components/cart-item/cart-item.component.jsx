import React from "react";

import {ImageContainer,CartItemContainer,ItemDetailsContainer,NameContainer} from "./cart-item.style"


const CartItem = ({item :{imageUrl, name , price, quantity}})=>(
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt="item" />
        <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <span className="price">{quantity}*${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)


export default CartItem ; 

