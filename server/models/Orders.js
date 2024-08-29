module.exports = (sequelize, DataTypes) => {

    const Orders = sequelize.define("Orders", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Orders.associate = (models) => {
        Orders.hasMany(models.Order_pizza, {
            foreignKey: 'id_order',
            as: 'orderPizzas'
        });
    };


    return Orders;
}