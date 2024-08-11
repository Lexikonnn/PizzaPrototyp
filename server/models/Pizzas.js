module.exports = (sequelize, DataTypes) => {


    const Pizzas = sequelize.define("Pizzas", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        priceLarge: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        priceSmall: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING, 
            allowNull: true,         
        },
    })

    Pizzas.associate = (models) => {
        Pizzas.hasMany(models.Order_pizza, {
            foreignKey: 'id_pizza',
            as: 'orderPizzas'
        });
        Pizzas.belongsToMany(models.Orders, {
            through: models.Order_pizza,
            foreignKey: 'id_pizza',
            as: 'orders'
        });
    };

    return Pizzas;
}