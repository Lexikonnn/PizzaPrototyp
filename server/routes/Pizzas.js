const express = require('express');
const router = express.Router();
const { Pizzas } = require('../models');

router.get('/', async (req, res) => {
    const listOfPizzas = await Pizzas.findAll();
    res.json(listOfPizzas);
});

router.post('/', async(req, res) => {
    const pizza = req.body;
    await Pizzas.create(pizza);
    res.json(pizza);
})


module.exports = router;