import React from 'react';
import "./preview.collection.scss";
import CollectionItem from "../../components/collection-item/collection-item.component"
import {withRouter} from "react-router-dom";
const CollectionPreview = ({title, items, routeName, history})=>{
    return (<div  className="collection-preview">
                <h1 onClick={()=>history.push(`${history.location.pathname}/${routeName}`)}className="title">{title.toUpperCase()} </h1>
                <div className="preview">
                    {items.filter((item,index)=>index<4).map((item)=>(<CollectionItem key={item.id} item={item}/>))}
                 </div>
            </div>)
}

export default withRouter(CollectionPreview) ; 