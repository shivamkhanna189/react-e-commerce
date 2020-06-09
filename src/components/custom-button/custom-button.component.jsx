import React from "react";
import "./custom-button.style.scss";


const CustomButton = ({children ,inverted, isGoogleSign, ...otherProps})=>(
    <button className={`${isGoogleSign ?"google-sign-in" :""} ${inverted ?"inverted" :""} custom-button` }  {...otherProps} >{children}</button>

)


export default CustomButton ; 