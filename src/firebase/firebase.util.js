import firebase from "firebase/app";
import "firebase/firestore"// for database
import "firebase/auth" // for auth 

const config = {
    apiKey: "AIzaSyBS_PsqlxVKwAbDzQdGeKiYw_5fC-xR2nA",
    authDomain: "react-e-commerce-eb073.firebaseapp.com",
    databaseURL: "https://react-e-commerce-eb073.firebaseio.com",
    projectId: "react-e-commerce-eb073",
    storageBucket: "react-e-commerce-eb073.appspot.com",
    messagingSenderId: "948425387961",
    appId: "1:948425387961:web:5b4366ac691986cb145068",
    measurementId: "G-XFVSBP66WR"
}

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return ; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth ; 
        const createdAt = new Date();

        try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
        }
        catch(error){
            console.log('error creating user' , error.message);
            
        }
    }

    return userRef ;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


/** Google sing In */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);


export default firebase; 

