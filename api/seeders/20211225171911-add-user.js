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
        namaLengkap: 'Aprian Tanuwijaya',
        email: 'aprian@gmail.com',
        password: bcrypt.hashSync('12345', 10, null),
        role: 'Member',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaLengkap: 'Diandra Raselina',
        email: 'diandra@gmail.com',
        password: bcrypt.hashSync('12345', 10, null),
        role: 'Member',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaLengkap: 'Reynaldi Noordien',
        email: 'reynaldi@gmail.com',
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
