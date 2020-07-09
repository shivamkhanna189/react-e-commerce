import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
import {selectIsCollectionLoading} from "../../redux/shop/shop.selector"
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component"

import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading : state=> !selectIsCollectionLoading(state)
})
const CollectionContainer =compose(
connect(mapStateToProps),
WithSpinner   
)
(CollectionPage)


export default CollectionContainer ;      