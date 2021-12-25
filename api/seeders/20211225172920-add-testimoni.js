'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let testimoni = [
      {
        quote: 'Gokil banget sih ini, website gue langsung peringkat 1 google pake SEO Agency dari RuApps',
        userId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quote: 'Keren banget sekarang bisnis saya sudah mempunyai website, Terima kasih RuApps, mantapp pokoknya',
        userId: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quote: 'Mantapp nih RuApps, biayanya terjangkau dan hasilnya memuaskan, semoga bisnis saya bisa lebih maju',
        userId: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    return queryInterface.bulkInsert('Testimoni', testimoni)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Testimoni', null, {});
  }
};
