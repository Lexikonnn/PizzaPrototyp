import { useState } from 'react';

const useOrderedPizzas = () => {
    const [orderedPizzas, setOrderedPizzas] = useState([]);

    const addPizza = (id, name, image, price) => {
        setOrderedPizzas((prevPizzas) => {
            const newPizzas = [...prevPizzas, { id, name, image, price }];
            console.log('Ordered Pizzas:', newPizzas);
            return newPizzas;
        });


    };
    return [orderedPizzas, addPizza];
}

export default useOrderedPizzas;