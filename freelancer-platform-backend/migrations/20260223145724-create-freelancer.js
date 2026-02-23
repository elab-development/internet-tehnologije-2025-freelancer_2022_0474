'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Freelancers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      hourlyRate: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      skills: {
        type: Sequelize.TEXT
      },
      shortBio: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Freelancers');
  }
};