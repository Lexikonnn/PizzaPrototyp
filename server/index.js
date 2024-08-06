const express = require('express')
const app = express()

app.use(express.json());

const db = require('./models');


//routes
const pizzaRouter = require('./routes/Pizzas');
app.use("/pizzas", pizzaRouter);



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server is running on port 3001");
    });
})


