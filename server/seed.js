const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('pizzadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const Pizzas = require('./models/Pizzas')(sequelize, DataTypes);

const seedPizzas = async () => {
    const queryInterface = sequelize.getQueryInterface();

    // Vypnout kontrolu cizích klíčů
    await queryInterface.sequelize.query('SET foreign_key_checks = 0');

    // Odstranit všechny tabulky (včetně těch s cizími klíči)
    await queryInterface.dropAllTables();

    // Znovu zapnout kontrolu cizích klíčů
    await queryInterface.sequelize.query('SET foreign_key_checks = 1');

    // Synchronizace modelů s databází
    await sequelize.sync({ force: true });

    const pizzas = [
        {
            name: 'Margherita',
            price: 8.99,
            size: 'large',
            imageUrl: '/assets/mockup.png',
        },
        {
            name: 'Margherita',
            price: 5.99,
            size: 'small',
            imageUrl: '/assets/mockup.png',
        },
        {
            name: 'Pepperoni',
            price: 10.99,
            size: 'large',
            imageUrl: '/assets/mockup.png',
        },
        {
            name: 'Pepperoni',
            price: 7.99,
            size: 'small',
            imageUrl: '/assets/mockup.png',
        },
        {
            name: 'Vegetarian',
            price: 9.99,
            size: 'large',
            imageUrl: '/assets/mockup.png',
        },
        {
            name: 'Vegetarian',
            price: 6.99,
            size: 'small',
            imageUrl: '/assets/mockup.png',
        },
        {
            name: 'BBQ Chicken',
            price: 11.99,
            size: 'large',
            imageUrl: '/assets/mockup.png',
        },
        {
            name: 'BBQ Chicken',
            price: 8.99,
            size: 'small',
            imageUrl: '/assets/mockup.png',
        },
        {
            name: 'Hawaiian',
            price: 10.49,
            size: 'large',
            imageUrl: '/assets/mockup.png',
        },
        {
            name: 'Hawaiian',
            price: 8.49,
            size: 'small',
            imageUrl: '/assets/mockup.png',
        },
    ];

    try {
        for (const pizza of pizzas) {
            await Pizzas.create(pizza);
        }
        console.log("Seeding successful!");
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        await sequelize.close();
    }
};

seedPizzas();
