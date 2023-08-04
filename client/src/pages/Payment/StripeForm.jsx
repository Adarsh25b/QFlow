import React,{useState,useEffect} from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./StripeForm.css";
import CheckoutForm from "./CheckoutForm";
import {useSelector} from 'react-redux'

const stripePromise = loadStripe("pk_test_51NQxXcSFTxZZAvcbzj04H7cJ4Pzvu65XOoKBbyOFivVh5dxA1ef98NzZQExlmadBzWUr2zT6JUvvG6sS6wUCc2qM00udYNkXPL");

const StripeForm = (props) => {
    const [clientSecret, setClientSecret] = useState("");
    var user = useSelector((state)=>(state.currentUserReducer))
   
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
        fetch(
            "https://adarsh12345.onrender.com/payment/purchasePlan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ plan: window.location.href.split('?')[1], id: user.result._id }),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const appearance = {
        theme: 'stripe',
    };
  
  
    const options = {
      clientSecret,
      appearance,
    };
  
    return (
      <div className="payment">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    );
}

export default StripeForm