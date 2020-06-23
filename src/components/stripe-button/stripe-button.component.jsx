import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51Gx2aHEv5WGS0XJiQNQNoa7CZw9MEX412ofb1Kr7M1Vaoy3gl3Csrfxy2GuHjODopZadShWYFZmh4JuXVl4XdTll0006jPxEnN';
    
    const onToken = (token)=>{
        console.log(token);
        alert("Payment Successful.")
    }

    return (
        <StripeCheckout 
        label ="Pay Now"
        name ="SK Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description = {`Your total price$${price}`}
        amount ={priceForStripe}
        panelLabel = "Pay Now"
        token ={onToken}
        stripeKey={publishableKey}
        ></StripeCheckout>
    )
}

export default StripeCheckoutButton ; 