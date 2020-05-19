import React from 'react';
import "./shops.style.scss" ;
import SHOP_DATA from "./shops.data";
import CollectionPreview from '../../components/preview-collection/preview.collection';


export class ShopsPage extends React.Component{

    constructor(){
        super();
        this.state = {
                collections : SHOP_DATA
        };
    }

    render(){
        return (
            this.state.collections.map(({id,...collectionData}) =>
                (<CollectionPreview key={id} {...collectionData}></CollectionPreview>))
        )        
    }

}