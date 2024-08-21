import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import imgUrl from "../assets/mockup.png";

import PizzaCard from '../components/pizzaCard/PizzaCard';
import Header from "../components/header/Header";

function Home() {

    const [listOfOrders, setListOfOrders] = useState([]);
    //const [listOfPizzas, setListOfPizzas] = useState([]);


    const listOfPizzas = [            
        {id: 1, image: imgUrl, name: "Margarita", priceSmall: 2.99, priceLarge: 4.99 },
        {id: 2, image: imgUrl, name: "Quatro Formagi", priceSmall: 2.99, priceLarge: 4.99 }
    ];


    /*useEffect(() => {
        axios.get('http://localhost:3001/orders').then((response) => {
            setListOfOrders(response.data);
        });

    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then((response) => {
            setListOfPizzas(response.data);
        });
    }, []);*/

    return (
        <div>
            <Header />

            {/*<div>
                {listOfOrders.map((value, key) => {
                    return <div> {value.name} </div>
                })
                }
            </div>
            */}
            <div>
                {listOfPizzas.map((value, key) => {
                    return <PizzaCard image={value.image} name={value.name} largePrice={ value.priceLarge } smallPrice={ value.priceSmall }/>
                })
                }
            </div>
        </div>
    )
}

export default Home;
