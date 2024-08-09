const express = require('express');
const router = express.Router();
const { Orders } = require('../models');

router.get('/', async (req, res) => {
    const listOfOrders = await Orders.findAll();
    res.json(listOfOrders);
});

router.post('/', async(req, res) => {
    const order = req.body;
    await Orders.create(order);
    res.json(order);
})


module.exports = router;