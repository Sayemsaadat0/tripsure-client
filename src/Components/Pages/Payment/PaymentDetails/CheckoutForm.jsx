import {
  CardElement,

  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import {
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
  FaCreditCard,
} from "react-icons/fa";

import "./cardElement.css";
import Swal from "sweetalert2";












const CheckoutForm = ({ price, orderDetails }) => {
 
  const stripe = useStripe();

  const elements = useElements();

  const [cardError, setCardError] = useState("");

  const [clientSecret, setClientSecret] = useState("");

  const [processing, setProcessing] = useState(false);

  const [transactionId, setTransactionId] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    axios
      .post(
        "http://localhost:1000/stripe-payment-intent",
        { price },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data) // Use res.data to access the response data
      .then((data) => setClientSecret(data.client_secret))
      .catch((error) => console.error(error));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log("card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);

      //payment information
      const payment = {
        user: user?.email,
        transactionId: transactionId,
        price,
        tourId: orderDetails?.card?._id,
        detailsPrice: orderDetails?.price,
        selectedDate: orderDetails?.selectedDate,
        travelerCount: orderDetails?.travelerCount,
      };
      axios
        .post(`http://localhost:1000/payments`, payment)
        .then((response) => {
          console.log("Payment successful:", response.data);
          if (response.data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Payment successfully Done',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        .catch((error) => {
          console.error("Error making payment:", error);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="card-element">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>Credit/Debit Card</span>
            <FaCcVisa className="text-blue-700"></FaCcVisa>
            <FaCreditCard className="text-blue-700"></FaCreditCard>
            <FaCcJcb className="text-orange-500"></FaCcJcb>
            <FaCcDiscover className="text-green-600"></FaCcDiscover>
            <FaCcMastercard className="text-red-700"></FaCcMastercard>
          </h2>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "24px",
                  color: "#333",
                  "::placeholder": {
                    color: "#999",
                  },
                  padding: "20px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                },
                invalid: {
                  color: "#e74c3c",
                  borderColor: "#e74c3c",
                },
              },
            }}
            id="card-number"
          />
        </div>

        <div className="flex justify-center mt-5">
          <button
            className="btn w-[40%] rounded-full bg-black hover:bg-[#584B9F] text-white "
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Payment
          </button>
        </div>
      </form>

      {cardError && <p>{cardError}</p>}
      {transactionId && (
        <p>
          {" "}
          Your Payment Successfully Done!. your transaction ID: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;



// https://tripsure-server-sayemsaadat0.vercel.app
