import React from "react";
import "./header.style.scss";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.util";
import {ReactComponent as Logo} from "../../assets/crown-logo.svg";
import {connect} from "react-redux";

const Header = ({currentUser})=>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shops">SHOP</Link>
            <Link className="option" to="/shops">CONTACT</Link>

             {
                currentUser ?
                (<div className="option" onClick={()=>auth.signOut()}>SignOut</div>) :
                (<Link className="option" to ="/signin">Sign In</Link>)

                }
        </div>
    </div>)

const mapsStateToProps =(state)=>{
    return ({currentUser : state.user.currentUser})
}
    
export default connect(mapsStateToProps)(Header); 