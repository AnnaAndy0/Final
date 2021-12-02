import React, { useState } from "react";
import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from '../components/restaurantList';
import Dishes from "../components/dishes";
import { InputGroup, InputGroupAddon,Input} from "reactstrap";



function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});

    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"> </link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> </link>
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@700&family=Outfit:wght@500;900&display=swap" rel="stylesheet"> </link>
    </head>
 
  
    return (
        <ApolloProvider client={client}>
          <div className="search">
              <br></br>
              <h2> Michelin Star Restaurants</h2>
                <br></br>

                    <style jsx> 
                     {`
                            h2{
                                color: red;
                                font-family: 'Great Vibes', cursive;
                                font-size: 3em;
                                padding-left: 330px;
                            }
                            `}
                            </style>
               
                <InputGroup >
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                />
                </InputGroup><br></br>
            </div>
            <RestaurantList search={query} />
            <Dishes search ={query}/>
            <Cart> </Cart>
        </ApolloProvider>
    );
  }



  export default Home;
  