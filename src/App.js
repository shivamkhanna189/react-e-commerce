import React from 'react';
import './App.css';
import {Route , Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import { ShopsPage } from './pages/shops/shops.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth ,createUserProfileDocument} from "./firebase/firebase.util";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action";
import {selectCurrenUser} from "./redux/user/user.selector"
class App extends React.Component {

  render(){
    return (
      <div>
        <Header />
        <Route exact path="/" component={ HomePage }/>
        <Route path="/shops" component = {ShopsPage}/>
        <Route exact path="/signin" render = {()=>
           this.props.currentUser ? (
              <Redirect to ="/" />
            ):(<SignInAndSignUpPage />)
        }/> 
      </div>
    );
  }

  unsubscribeFromAuth = null ; 
  componentDidMount(){

    const {setCurrentUser} = this.props ; 
     this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth=>{

          if(userAuth){
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapShot=>{
              setCurrentUser({
                  id : snapShot.id ,
                  ...snapShot.data()
              })
            })
          }else{
            setCurrentUser(userAuth);
          }
      })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
}
const mapStateToProps =(state)=>{
  return ({currentUser : selectCurrenUser(state)})
}
const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
