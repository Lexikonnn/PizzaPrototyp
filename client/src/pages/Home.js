import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

    const [listOfOrders, setListOfOrders] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/orders').then((response) => {
            setListOfOrders(response.data);
        });
    }, []);

    return (
        <div>
            {listOfOrders.map((value, key) => {
                return <div> {value.name} </div>
            })
            }
        </div>
    )
}

export default Home