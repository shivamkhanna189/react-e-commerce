

import React from 'react';
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.action";

import {CollectionItemContainer,AddCartButton,ImageItemContainer,CollectionFooterContainer,
    NameContainer,
    PriceContainer} from "./collection-item.style"

const CollectionItem = ({item ,addItem})=>{
    
    const {name, price , imageUrl} = item ;
    return (
            <CollectionItemContainer>
                <ImageItemContainer className ="image" imageUrl={imageUrl} />

                <CollectionFooterContainer>
                    <NameContainer>{name}</NameContainer>
                    <PriceContainer>{price}</PriceContainer>
                </CollectionFooterContainer>
                <AddCartButton onClick = {()=>addItem(item)} 
                inverted>Add to Cart</AddCartButton>
            </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch =>({
    addItem : item =>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);