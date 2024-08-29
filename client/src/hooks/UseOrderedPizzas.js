import { useState } from 'react';

const useOrderedPizzas = () => {
    const [orderedPizzas, setOrderedPizzas] = useState([]);

    const addPizza = (id, name, image, price) => {
        setOrderedPizzas((prevPizzas) => {
            const pizzaIndex = prevPizzas.findIndex(pizza => pizza.id === id);
            if (pizzaIndex !== -1) {
                
                const newPizzas = [...prevPizzas];
                newPizzas[pizzaIndex].amount += 1;
                console.log('Updated pizzas in state:', newPizzas);
                return newPizzas;
            } else {
                const newPizza = { id, name, image, price, amount: 1 };
                console.log('Adding new pizza to state:', newPizza);
                return [...prevPizzas, newPizza];
            }
        });
    };

    return [orderedPizzas, addPizza];
}

export default useOrderedPizzas;