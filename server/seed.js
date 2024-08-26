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
            priceLarge: 8.99,
            priceSmall: 6.99,
            imageUrl: '/assets/mockup.png',  // URL obrázku
        },
        {
            name: 'Pepperoni',
            priceLarge: 10.99,
            priceSmall: 7.99,
            imageUrl: '/assets/mockup.png',  // URL obrázku
        },
        {
            name: 'Vegetarian',
            priceLarge: 9.99,
            priceSmall: 7.49,
            imageUrl: '/assets/mockup.png',  // URL obrázku
        },
        {
            name: 'BBQ Chicken',
            priceLarge: 11.99,
            priceSmall: 8.49,
            imageUrl: '/assets/mockup.png',  // URL obrázku
        },
        {
            name: 'Hawaiian',
            priceLarge: 10.49,
            priceSmall: 7.99,
            imageUrl: '/assets/mockup.png',  // URL obrázku
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
