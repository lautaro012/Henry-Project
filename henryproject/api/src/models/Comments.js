const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('comments', { 
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
   });
};