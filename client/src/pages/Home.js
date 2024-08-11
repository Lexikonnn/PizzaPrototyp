import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

import PizzaCard from '../components/pizzaCard/PizzaCard';

function Home() {

    const [listOfOrders, setListOfOrders] = useState([]);
    const [listOfPizzas, setListOfPizzas] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:3001/orders').then((response) => {
            setListOfOrders(response.data);
        });

    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then((response) => {
            setListOfPizzas(response.data);
        });
    }, []);

    return (
        <div>
            <div>
                {listOfOrders.map((value, key) => {
                    return <div> {value.name} </div>
                })
                }
            </div>
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
