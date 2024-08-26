import React from 'react'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import './Home.css';
import useVisibility from '../hooks/UseVisibility';
import useOrderedPizzas from '../hooks/UseOrderedPizzas';

import PizzaCard from '../components/pizzaCard/PizzaCard';
import BaseLayout from '../layouts/Base';
import Btn from "../components/button/Btn";

import pizza from "../assets/pizza.png";
import drink from "../assets/drink.png";

function Home() {

    const [orderedPizzas, addPizza] = useOrderedPizzas();
    const [listOfPizzas, setListOfPizzas] = useState([]);


    const handleClick = (id, name, image, price) => {
        addPizza(id, name, image, price);
    };

    const sectionRef = useRef(null);
    const isVisible = useVisibility(sectionRef);


    useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then((response) => {
            console.log(response.data);
            setListOfPizzas(response.data);
        });
    }, []);

    return (
        <div>
            <BaseLayout isVisible={isVisible}>
                <div className='section landing'>
                    <div className='landing-wrapper'>
                        <h1 className='lg-title white'>Discover Our <br /> Pizza</h1>
                        <Btn ui="white" content="Let`s GO!" />
                    </div>
                    <img className='pizza-img' src={pizza} alt="pizza" />
                    <img className='drink-img' src={drink} alt="drink" />
                </div>
                <div className='section goods' ref={sectionRef}>
                    {listOfPizzas.map((pizza, key) => {
                        return <PizzaCard
                            id={pizza.id}
                            image={pizza.imageUrl}
                            name={pizza.name}
                            largePrice={pizza.priceLarge}
                            smallPrice={pizza.priceSmall}
                            onClick={addPizza} />
                    })
                    }
                </div>
            </ BaseLayout>
        </div>
    )
}

export default Home;
