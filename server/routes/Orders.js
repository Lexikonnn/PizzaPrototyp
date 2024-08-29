const express = require('express');
const router = express.Router();
const { Orders, Order_pizza } = require('../models');

router.get('/', async (req, res) => {
    const listOfOrders = await Orders.findAll({
        include: [{ model: Order_pizza, as: 'orderPizzas' }]
    });
    res.json(listOfOrders);
});


router.post('/', async (req, res) => {
    const { name, email, phone, address, pizzas } = req.body;

    try {

        const newOrder = await Orders.create({ name, email, phone, address });

        
        if (pizzas && pizzas.length > 0) {
            const orderPizzas = pizzas.map((pizza) => ({
                id_order: newOrder.id,
                id_pizza: pizza.id,
                amount: pizza.amount || 1,
            }));

            await Order_pizza.bulkCreate(orderPizzas);
        }

        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Failed to create order:', error);
        res.status(500).json({ error: `Failed to create order: ${error.message}` });
    }
});

module.exports = router;