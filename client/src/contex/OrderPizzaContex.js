import React, { createContext, useState } from 'react';

export const OrderedPizzasContext = createContext();

export const OrderedPizzasProvider = ({ children }) => {
    const [orderedPizzas, setOrderedPizzas] = useState([]);

    const addPizza = (id, name, image, price, size) => {
        setOrderedPizzas((prev) => {
            const pizzaIndex = prev.findIndex((pizza) => pizza.id === id);

            if (pizzaIndex !== -1) {
                const updatedPizzas = [...prev];
                updatedPizzas[pizzaIndex].amount += 1;
                return updatedPizzas;
            } else {
                return [...prev, { id, name, image, price, size, amount: 1 }];
            }
        });
    };

    const updatePizzaAmount = (id, newAmount) => {
        setOrderedPizzas((prev) => {
            return prev.map((pizza) =>
                pizza.id === id ? { ...pizza, amount: newAmount } : pizza
            );
        });
    };

    const priceMultiplier = (price, amount) => {
        const priceMultiplied = amount * price;
        return priceMultiplied;
    }

    const totalPrice = () => {
        return orderedPizzas.reduce((total, pizza) => {
            return total + priceMultiplier(pizza.price, pizza.amount);
        }, 0);
    };

    const removePizza = (id) => {
        setOrderedPizzas((prev) => {
            return prev.filter(pizza => pizza.id !== id);
        });
    };

    return (
        <OrderedPizzasContext.Provider value={{ orderedPizzas, addPizza, updatePizzaAmount, removePizza, priceMultiplier, totalPrice }}>
            {children}
        </OrderedPizzasContext.Provider>
    );
};