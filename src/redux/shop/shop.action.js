
import {shopActionTypes} from "./shop.type" ;
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';

export const fetchCollectionStart = ()=>({
    type : shopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collectionMap)=>({
    type : shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload : collectionMap
})

export const fetchCollectionFailure = (errorMessage)=>({
    type : shopActionTypes.FETCH_COLLECTION_FAILURE,
    payload : errorMessage
})

export const fetchCollectionsStartAsync = ()=>{
    return dispatch =>{
        dispatch(fetchCollectionStart())
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot=>{
            const collectionMap =  convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(error=>dispatch(fetchCollectionFailure(error.message)))
    }
}