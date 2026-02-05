'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Jobs', 'duration', {
      type: Sequelize.STRING
    });

    await queryInterface.addColumn('Jobs', 'detailedDescription', {
      type: Sequelize.TEXT
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Jobs', 'duration');
    await queryInterface.removeColumn('Jobs', 'detailedDescription');
  }
};
