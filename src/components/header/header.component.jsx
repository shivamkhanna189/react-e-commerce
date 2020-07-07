import React from "react";
import {auth} from "../../firebase/firebase.util";
import {ReactComponent as Logo} from "../../assets/crown-logo.svg";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import  CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrenUser} from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import {HeaderContainer,LogoContainer,OptionsContainer,
    OptionLink} from "./header.style"
const Header = ({currentUser,hidden})=>(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>

             {
                currentUser ?
                (<OptionLink  as='div' onClick={()=>auth.signOut()}>SignOut</OptionLink>) :
                (<OptionLink to ="/signin">Sign In</OptionLink>)

                }
              <CartIcon ></CartIcon>  
        </OptionsContainer>
        {hidden ? null : <CartDropdown></CartDropdown>}
        
    </HeaderContainer>)

const mapStateToProps =createStructuredSelector({
        currentUser : selectCurrenUser,
        hidden :selectCartHidden
    })

export default connect(mapStateToProps)(Header); 