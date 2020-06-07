import React from "react";
import "./header.style.scss";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.util";
import {ReactComponent as Logo} from "../../assets/crown-logo.svg";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import  CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser,hidden})=>(
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
              <CartIcon ></CartIcon>  
        </div>
        {hidden ? null : <CartDropdown></CartDropdown>}
        
    </div>)

const mapsStateToProps =({user:{currentUser},cart:{hidden}})=>{
    return ({currentUser : currentUser,
        hidden : hidden
    })
}

    
export default connect(mapsStateToProps)(Header); 