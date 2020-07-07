import React from 'react';
import "./shops.style.scss" ;
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route } from 'react-router-dom';
import CollectionPage from "../collection/collection.component";
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import {SetShopData} from "../../redux/shop/shop.action"
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopsPage extends React.Component {
    state = {
        loading : true
    }
    unsubscrbeFromSnapshot = null; 



    render(){
        const {match} = this.props ;
        const {loading} = this.state
    
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render = {(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>}></Route>
                <Route path={`${match.path}/:collectionId`}  render = {(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}></Route>
            </div>
        ) 
    }

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
        const {SetShopData} = this.props ;

        collectionRef.get().then(snapshot=>{
            const collectionMap =  convertCollectionsSnapshotToMap(snapshot)
            SetShopData(collectionMap)
            this.setState({loading : false })
        })
    }


    componentWillUnmount(){
        this.unsubscrbeFromSnapshot();
    }
}

const mapDispatchToProps = dispatch =>({
    SetShopData : data=>dispatch(SetShopData(data))
})
export default connect(null,mapDispatchToProps)(ShopsPage) ; 
