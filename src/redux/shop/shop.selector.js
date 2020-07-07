import {createSelector} from "reselect";

const selectsShops = state=>state.shop ;

const selectShopData = createSelector(
    [selectsShops],
    (shopData)=>shopData.collections
)

export default selectShopData ; 

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    collections  => collections ? Object.keys(collections).map(key=>collections[key]) : []
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopData],
        collections=>collections ? collections[collectionUrlParam] : null 
    )



