import React from 'react';
import "./shops.style.scss" ;
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route } from 'react-router-dom';
import CollectionPage from "../collection/collection.component";


const ShopsPage = ({match})=>{
    console.log(match);
    
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
            <Route path={`${match.path}/:collectionId`}  component={CollectionPage}></Route>
        </div>
        
    )    
}
export default ShopsPage ; 
