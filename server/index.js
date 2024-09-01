const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const pizzaRouter = require('./routes/Pizzas');
app.use("/pizzas", pizzaRouter);

const orderRouter = require('./routes/Orders');
app.use("/orders", orderRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server is running on port 3001");
    });
})