module.exports = (sequelize, DataTypes) => {
    
    const Orders = sequelize.define("Orders", {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        adress:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Orders;
}