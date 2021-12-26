'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let messages = [
      {
        namaLengkap: 'Dwiki Givan Wagey',
        email: 'dwiki@gmail.com',
        pesan: 'Selamat siang, saya mau nanya berapa lama kira2 jika saya memakai jasa pembuatan apps?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaLengkap: 'Agustina Azalia',
        email: 'agustina@gmail.com',
        pesan: 'Halo admin, saya ingin bertanya mengenai pembayaran, apakah anda bisa menjelaskannya?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaLengkap: 'Fiani Berty Santi',
        email: 'fiani@gmail.com',
        pesan: 'Halo admin, saya ingin berkonsultasi mengenai product branding yang mimin sediakan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaLengkap: 'Andhicha Farizi Hasan',
        email: 'andhicha@gmail.com',
        pesan: 'Halo min, apakah mimin punya trainer untuk mengajar karyawan untuk membangun bisnis saya?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaLengkap: 'Annieza Puspitasari',
        email: 'annieza@gmail.com',
        pesan: 'Halo admin, jika saya membangun aplikasi, apakah hostingnya sudah diatur juga? Terima kasih',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    return queryInterface.bulkInsert('Contacts', messages)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
