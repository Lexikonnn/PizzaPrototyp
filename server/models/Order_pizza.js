module.exports = (sequelize, DataTypes) => {

    const Order_pizza = sequelize.define("Order_pizza", {
        id_pizza: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Pizzas',
                key: 'id',
            },
            primaryKey: true,
        },
        id_order: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Orders',
                key: 'id',
            },
            primaryKey: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    Order_pizza.associate = (models) => {
        Order_pizza.belongsTo(models.Orders, {
            foreignKey: 'id_order',
            as: 'order'
        });
        Order_pizza.belongsTo(models.Pizzas, {
            foreignKey: 'id_pizza',
            as: 'pizza'
        });
    };


    return Order_pizza;
}