import React from 'react';
import "./preview.collection.scss";
import CollectionItem from "../../components/collection-item/collection-item.component"

const CollectionPreview = ({title, items})=>{
    return (<div  className="collection-preview">
                <h1 className="title">{title.toUpperCase()} </h1>
                <div className="preview">
                    {items.filter((item,index)=>index<4).map(({id,...reaminingItemData})=>(<CollectionItem key={id} {...reaminingItemData}/>))}
                 </div>
            </div>)
}

export default CollectionPreview ; 