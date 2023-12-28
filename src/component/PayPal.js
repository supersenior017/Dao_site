import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const style = { "layout": "vertical" };
function Message({ content }) {
    return <p>{content}</p>;
}

const Checkout = ({ amount }) => {
    console.log(amount)
    const [message, setMessage] = useState("");
    const initialOptions = {
        "client-id": "AQuursJC7xOTOVut8B914uSYMTZj8jj0Tiokk4ObbnrodIVmDf_YP7cktkBfBk50O0wx1YFvQipias1t",
        "enable-funding": "paylater,venmo",
        "data-sdk-integration-source": "integrationbuilder_sc",
    };
    const createOrder = async (a) => {
        try {
            console.log(123, a)
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // use the "body" param to optionally pass additional order information
                // like product ids and quantities
                body: JSON.stringify({
                    cart: [
                        {
                            id: "YOUR_PRODUCT_ID",
                            quantity: "YOUR_PRODUCT_QUANTITY",
                        },
                    ],
                    amount: a
                    // cart: amount
                }),
            });

            const orderData = await response.json();

            if (orderData.id) {
                return orderData.id;
            } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : JSON.stringify(orderData);

                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error(error);
            setMessage(`Could not initiate PayPal Checkout...${error}`);
        }
    }
    const handleApprove = async (data, actions) => {
        try {
            const response = await fetch(
                `/api/orders/${data.orderID}/capture`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

            const orderData = await response.json();
            // Three cases to handle:
            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            //   (2) Other non-recoverable errors -> Show a failure message
            //   (3) Successful transaction -> Show confirmation or thank you message

            const errorDetail = orderData?.details?.[0];

            if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
            } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                throw new Error(
                    `${errorDetail.description} (${orderData.debug_id})`,
                );
            } else {
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');
                const transaction =
                    orderData.purchase_units[0].payments.captures[0];
                setMessage(
                    `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
                );
                console.log(
                    "Capture result",
                    orderData,
                    JSON.stringify(orderData, null, 2),
                );
            }
        } catch (error) {
            console.error(error);
            setMessage(
                `Sorry, your transaction could not be processed...${error}`,
            );
        }
    }
    return (
        <div style={{ maxWidth: "250px", minHeight: "100px", margin: 'auto', marginTop: "10px" }} >
            <PayPalScriptProvider options={{ clientId: process.env.REACT_APP_CLIENT_ID, components: "buttons", currency: "USD" }}>
                <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons
                        style={{
                            shape: "rect",
                            //color:'blue' change the default color of the buttons
                            layout: "vertical", //default value. Can be changed to horizontal
                        }}
                        createOrder={()=>createOrder(amount)}
                        onApprove={handleApprove}
                    />
                </PayPalScriptProvider>
                <Message content={message} />
            </PayPalScriptProvider>
        </div>
    )
}
function PayPal(){}


export default Checkout;

