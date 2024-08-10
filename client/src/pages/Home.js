import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

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
                    return <div> {value.name} </div>
                })
                }
            </div>
        </div>
    )
}

export default Home;
