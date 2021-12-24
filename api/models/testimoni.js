'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimoni extends Model {
    static associate(models) {
      Testimoni.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      })
    }
  };
  Testimoni.init({
    quote: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Testimoni',
    freezeTableName: true,
  });
  return Testimoni;
};