const { DataTypes, UUID, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('platforms', { 
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }

  }, {timestamps: false});
};