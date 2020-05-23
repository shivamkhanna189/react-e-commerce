import React from "react";
import "./form-input.style.scss";


const FormInput = ({handleChange,label,...otherProps})=>{
    return (
        <div className="group">
                <input className="form-input" {...otherProps} onChange={handleChange}/>
                {label ?(<label>{label}</label>) : null}
        </div>

    );
}


export default FormInput ; 


