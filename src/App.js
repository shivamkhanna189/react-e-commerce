import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import { ShopsPage } from './pages/shops/shops.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.util";
class App extends React.Component {

  constructor(){
    super();
    this.state ={
        currentUser : null
    }
  } 

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/shops" component = {ShopsPage}/>
        <Route path="/signin" component = {SignInAndSignUpPage}/> 
      </div>
    );
  }

  unsubscribeFromAuth = null ; 
  componentDidMount(){
     this.unsubscribeFromAuth =  auth.onAuthStateChanged(user=>{
        this.setState({
          currentUser : user
        })
        console.log(user);
        
      })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
}

export default App;
