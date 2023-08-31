import { CardElement, LinkAuthenticationElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';


const CheckoutForm = ({price}) => {
    console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('') 
    const [clientSecret, setClientSecret] =  useState('')
    const [processing , setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('');
    const {user} = useAuth();
    console.log(user);

    useEffect(()=>{
        axios.post('https://tripsure-server-sayemsaadat0.vercel.app/stripe-payment-intent', {price}, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.data) // Use res.data to access the response data
    .then(data => setClientSecret(data.client_secret))
    .catch(error => console.error(error));
    },[price])

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) { 
            return
        }
        console.log('card', card);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else{
            setCardError('')
            // console.log('payment method', paymentMethod);
        }
        setProcessing(true)
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "unknown",
                        email: user?.email || "unknown",

                    },
                },
            }
        )


        if (confirmError) {
            console.log(confirmError);
        }
        console.log("payment intent",paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
          const transactionId = paymentIntent.id
          setTransactionId(transactionId);
        }
    }


    return (
     <>
        <form onSubmit={handleSubmit}>
        <CardElement 
  options={{
    style: {
      base: {
        fontSize: '24px',
        color: '#333',
        '::placeholder': {
          color: '#999',
        },
        padding: '20px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
        
      },
      invalid: {
        color: '#e74c3c',
        borderColor: '#e74c3c',
      },
    },
  }}
/>
  
      <button type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    
    {
        cardError && <p>{cardError}</p>
    }
    {
      transactionId && <p> Your Payment Successfully Done!. your transaction ID: {transactionId}</p>
    }
     </>
    );
};

export default CheckoutForm;