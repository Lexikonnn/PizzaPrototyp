const db = require('./models');

const syncDatabase = async () => {
    try {
        await db.sequelize.sync({ force: true }); // Synchronizuje modely s databází a smaže existující tabulky
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Error synchronizing database:", error);
    } finally {
        await db.sequelize.close(); // Zavře připojení k databázi
    }
};

syncDatabase();
