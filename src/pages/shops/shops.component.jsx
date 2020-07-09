import React from 'react';
import "./shops.style.scss" ;
import {Route } from 'react-router-dom';
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.action"
import {connect} from "react-redux";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container"
import CollectionContainer from "../collection/collection.container";

class ShopsPage extends React.Component {
    render(){
        const {match } = this.props ;
    
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component = {CollectionOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component ={CollectionContainer} />
            </div>
        ) 
    }

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
}

const mapDispatchToProps = dispatch =>({
    fetchCollectionsStartAsync : data=>dispatch(fetchCollectionsStartAsync(data))
})
export default connect(null,mapDispatchToProps)(ShopsPage) ; 
