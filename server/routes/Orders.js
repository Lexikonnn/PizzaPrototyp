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
    console.log("Received data:", { name, email, phone, address, pizzas });

    try {
        // Basic validation
        if (!name || !email || !phone || !address || !Array.isArray(pizzas)) {
            return res.status(400).json({ error: "Invalid input data" });
        }

        // Create new order
        const newOrder = await Orders.create({ name, email, phone, address });

        // Create or update Order_pizza entries
        for (const pizza of pizzas) {
            const { id, amount } = pizza;

            if (!id || !amount) {
                return res.status(400).json({ error: "Invalid pizza data" });
            }

            await Order_pizza.upsert({
                id_order: newOrder.id,
                id_pizza: id,
                amount: amount
            });
        }

        res.status(201).json(newOrder);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: `Failed to create order: ${error.message}` });
    }
});

module.exports = router;