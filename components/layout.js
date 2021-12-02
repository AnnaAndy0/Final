/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
import AppContext from "./context";
import sytles from "../styles/Home.module.css"

const Layout = (props) => {
const title = "Michelin Star Delivery";
const {user} = useContext(AppContext);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Outfit:wght@500;900&display=swap" rel="stylesheet"></link>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            .navbar-brand{
              color: white;
            }

            .ml-auto{
              color:white;
              font-size:1.5em;
              padding-top: 15px;
            }

            a {
              color: white;
              font-size:1.5em;
              font-family: 'Outfit', sans-serif;
            }

            a: hover{
              color: red;
              background-color: white;
            }
            h5 {
              color: white;
              padding-top: 5px;
              font-size:1.5em;
              font-family: 'Outfit', sans-serif;
            }
          `}
        </style>
        <Nav className="navbar navbar-light bg-danger">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </NavItem>
          <NavItem className="ml-auto">
            {user ? (
              <h5>{user.username}</h5>
            ) : (
              <Link href="/register">
                <a className="nav-link"> Sign up</a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <Link href="/">
                <a
                  className="nav-link"
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="nav-link">Sign in</a>
              </Link>
            )}
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};


export default Layout;