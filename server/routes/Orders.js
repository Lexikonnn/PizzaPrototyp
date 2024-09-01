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
            for (const pizza of pizzas) {
                const existingOrderPizza = await Order_pizza.findOne({
                    where: {
                        id_order: newOrder.id,
                        id_pizza: pizza.id,
                    }
                });

                if (existingOrderPizza) {
                    await existingOrderPizza.update({ amount: existingOrderPizza.amount + pizza.amount });
                } else {
                    await Order_pizza.create({
                        id_order: newOrder.id,
                        id_pizza: pizza.id,
                        amount: pizza.amount,
                    });
                }
            }
        }

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: `Failed to create order: ${error.message}` });
    }
});

module.exports = router;