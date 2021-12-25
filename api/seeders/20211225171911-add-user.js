'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [
      {
        namaLengkap: 'Muhamad Ndaru',
        email: 'ndaru@gmail.com',
        password: bcrypt.hashSync('12345', 10, null),
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaLengkap: 'Yosua Gunawan',
        email: 'yosua@gmail.com',
        password: bcrypt.hashSync('12345', 10, null),
        role: 'Member',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaLengkap: 'Mavis Zeng',
        email: 'mavis@gmail.com',
        password: bcrypt.hashSync('12345', 10, null),
        role: 'Member',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaLengkap: 'Handy Darmawan',
        email: 'handy@gmail.com',
        password: bcrypt.hashSync('12345', 10, null),
        role: 'Member',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    return queryInterface.bulkInsert('Users', users)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
