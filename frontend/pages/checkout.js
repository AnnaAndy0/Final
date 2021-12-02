/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";
import styles from "../styles/Home.module.css"
function Checkout() {
  // get app context
  const {isAuthenticated} = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;
  
  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51JugzBKVn1rvfSXIIuN7qk7dlcB4PjJhKSKjTwT5TgupwPJ0qprtTuotHW48dhM4fAS2rMbuUFd1XxyzeQsPTOaB00KDUhRk4u"
  );

  <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Outfit:wght@500;900&display=swap" rel="stylesheet"></link>
  </head>

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1>Checkout</h1>
        <style jsx>
        {`
        h1{
          margin: 20;
          color: red;
          font-family: 'Outfit', sans-serif;
          font-size: 3em;
        }
        `}
        </style>
        <Cart isAuthenticated={isAuthenticated} />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
