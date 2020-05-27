import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.util";
import { auth } from "../../firebase/firebase.util";


class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
                email :"",
                password :""
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email , password} = this.state; 
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({
                email :"",
                password :""
            })
        }catch(error){
            console.error(error)
        }
        this.setState({email :"", password :""})
    }   

    handleChange = event=>{
        const {name , value} = event.target
        this.setState({
            [name] : value
        })

    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password </span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required
                        handleChange = {this.handleChange} label ="Email" />
                    
                    <FormInput type="password" name="password" value={this.state.password} required handleChange = {this.handleChange} label="Password"/>    

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton  type="button" onClick = {signInWithGoogle} isGoogleSign> Google SignIn </CustomButton>                                        
                    </div>
                    
                </form>
            </div>
        )
    }
}


export default SignIn ;

