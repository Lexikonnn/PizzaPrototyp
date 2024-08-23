import React from 'react'
import axios from 'axios';
import { useState, useRef } from 'react';
import './Home.css';
import useVisibility from '../hooks/UseVisibility';

import imgUrl from "../assets/mockup.png";

import PizzaCard from '../components/pizzaCard/PizzaCard';
import BaseLayout from '../layouts/Base';
import Btn from "../components/button/Btn";

import pizza from "../assets/pizza.png";
import drink from "../assets/drink.png";

function Home() {

    const [listOfOrders, setListOfOrders] = useState([]);

    const sectionRef = useRef(null);
    const isVisible = useVisibility(sectionRef);

    const listOfPizzas = [
        { id: 1, image: imgUrl, name: "Margarita", priceSmall: 2.99, priceLarge: 4.99 },
        { id: 2, image: imgUrl, name: "Quatro Formagi", priceSmall: 2.99, priceLarge: 4.99 },
        { id: 3, image: imgUrl, name: "Baniček", priceSmall: 2.99, priceLarge: 4.99 },
        { id: 4, image: imgUrl, name: "Assen", priceSmall: 2.99, priceLarge: 4.99 },
        { id: 5, image: imgUrl, name: "Westyho sen", priceSmall: 2.99, priceLarge: 4.99 },
        { id: 6, image: imgUrl, name: "Mexico", priceSmall: 2.99, priceLarge: 4.99 }
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
            <BaseLayout isVisible={isVisible}>
                <div className='section landing'>
                    <div className='landing-wrapper'>
                        <h1 className='lg-title'>Discover Our <br /> Pizza</h1>
                        <Btn type="white" content="Let`s GO!" />
                    </div>
                    <img className='pizza-img' src={pizza} alt="pizza" />
                    <img className='drink-img' src={drink} alt="drink" />
                </div>
                <div className='section goods' ref={sectionRef}>
                    {listOfPizzas.map((value, key) => {
                        return <PizzaCard image={value.image} name={value.name} largePrice={value.priceLarge} smallPrice={value.priceSmall} />
                    })
                    }
                </div>
            </ BaseLayout>
        </div>
    )
}

export default Home;
