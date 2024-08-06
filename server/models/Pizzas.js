module.exports = (sequelize, DataTypes) => {
    
    const Pizzas = sequelize.define("Pizzas", {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        PriceLarge:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        PriceSmall:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    })
    return Pizzas;
}