const {DataTypes}=require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define('orders',{
        id_Orders:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            defaultValue: DataTypes.INTEGER,
            allowNull:false

        },
        date:{
            type:DataTypes.DATEONLY,
            allowNull:false,
            defaultValue: new Date()
        },
        payment:{
            type:DataTypes.STRING,
            allowNull:false
        },
        subTotal:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        paid:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{timestaps:false});
}
