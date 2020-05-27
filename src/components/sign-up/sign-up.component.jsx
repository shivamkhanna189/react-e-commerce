import React from 'react';
import "./sign-up.style.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {auth, createUserProfileDocument} from "../../firebase/firebase.util";

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName :"",
            email :"",
            password :"",
            confirmPassword :""
        }
    }
    handleSubmit =async (event)=>{
        event.preventDefault();

        const {displayName, email , password , confirmPassword} = this.state ; 

        if(password != confirmPassword){
            alert("Password Don't match")
            return ; 
        }

        try{
            const {user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName :"",
                email :"",
                password :"",
                confirmPassword :""
            });
        }
        catch(error){
            console.error(error);
        }
        
        console.log(" Submit ");
        
    }

    handleChange = (event)=>{
       const {name , value} = event.target; 
       this.setState({[name] : value});
    }

    render(){
        const {displayName, email , password , confirmPassword} = this.state ; 
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and passwrod</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        label ="Display Name"
                        value ={displayName}
                        handleChange={this.handleChange}
                        required
                    />
                     <FormInput 
                        type="email"
                        name="email"
                        label ="email"
                        value ={email}
                        handleChange={this.handleChange}
                        required
                    />
                     <FormInput 
                        type="password"
                        name="password"
                        label ="password"
                        value ={password}
                        handleChange={this.handleChange}
                        required
                    />
                     <FormInput 
                        type="password"
                        name="confirmPassword"
                        label ="Confirm Password "
                        value ={confirmPassword}
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton type="submit">SIGN UP </CustomButton>
                    </form>
            </div>
        );
    }
    
}

export default SignUp; 