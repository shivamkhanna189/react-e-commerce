import React from "react";
import "./collection-overview.style.scss";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import CollectionPreview from "../preview-collection/preview.collection"
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";


const CollectionOverview = ({collections})=>{
    return (
        <div className="collections-overview">
            {collections.map(({id,...collectionData}) =>
            (<CollectionPreview key={id} {...collectionData}></CollectionPreview>))}
        </div>
        
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionOverview) ;