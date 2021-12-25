'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {}
  };
  Contact.init({
    namaLengkap: DataTypes.STRING,
    email: DataTypes.STRING,
    pesan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};