'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('user', [{
        name: 'John Doe',
        email:'john@gmail.com',
        role:'dev',
        uuid:'82448009-ca42-4230-a686-abc6cf3a9b11',
        createdAt:'2022-08-18T23:07:16.056Z',
        updatedAt:'2022-08-18T23:07:16.056Z'
      },{
        name: 'Jake Doe',
        email:'jake@gmail.com',
        role:'info',
        uuid:'12348009-ca42-4230-a686-abc6cf3a9b11',
        createdAt:'2022-08-18T23:07:16.056Z',
        updatedAt:'2022-08-18T23:07:16.056Z'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('user', null, {});
  }
};
