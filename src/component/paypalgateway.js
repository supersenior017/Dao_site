import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButtonContainer = ({ total }) => {
  // Load the PayPal script and include the necessary options
  const initialOptions = {
    "client-id": "YOUR_CLIENT_ID_HERE",
    currency: "USD",
    intent: "capture", // Change to "authorize" if you want to authorize payment only
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total.toString(), // The total amount of the cart
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert("Transaction completed by " + details.payer.name.given_name);
      // Here you would typically update the cart and redirect the user to a success page
    });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalButtonContainer;
