import React from 'react'
import axios from 'axios';
import { useEffect, useState, useRef, useContext } from 'react';
import './Home.css';
import useVisibility from '../hooks/UseVisibility';

import PizzaCard from '../components/pizzaCard/PizzaCard';
import BaseLayout from '../layouts/Base';
import Btn from "../components/button/Btn";

import pizza from "../assets/pizza.png";
import drink from "../assets/drink.png";

import { OrderedPizzasContext } from '../contex/OrderPizzaContex';


function Home() {

    const { orderedPizzas, addPizza } = useContext(OrderedPizzasContext);
    const [listOfPizzas, setListOfPizzas] = useState([]);


    const handleClick = (id, name, image, price, size) => {
        addPizza(id, name, image, price, size);
    };

    const sectionRef = useRef(null);
    const isVisible = useVisibility(sectionRef);


    useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then((response) => {
            console.log(response.data); // Zkontrolujte, zda data obsahují `size`

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
                    {listOfPizzas
                        .filter(pizza => pizza.size === 'large')
                        .map((pizza, key) => {
                            const smallPizza = listOfPizzas.find(p => p.name === pizza.name && p.size === 'small');
                            return (<PizzaCard
                                key={pizza.id}
                                id={pizza.id}
                                image={pizza.imageUrl}
                                name={pizza.name}
                                largePrice={pizza.price}
                                largeId={pizza.id}
                                smallPrice={smallPizza?.price}
                                smallId={smallPizza?.id}
                                onClick={handleClick}
                                />
                            );
                        })
                    }
                </div>
            </ BaseLayout>
        </div>
    )
}

export default Home;
