'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // Profiles.userId -> Users.id
    await queryInterface.addConstraint('Profiles', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'fk_profiles_user',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // Jobs.clientId -> Users.id
    await queryInterface.addConstraint('Jobs', {
      fields: ['clientId'],
      type: 'foreign key',
      name: 'fk_jobs_client',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // Offers.jobId -> Jobs.id
    await queryInterface.addConstraint('Offers', {
      fields: ['jobId'],
      type: 'foreign key',
      name: 'fk_offers_job',
      references: {
        table: 'Jobs',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // Offers.freelancerId -> Users.id
    await queryInterface.addConstraint('Offers', {
      fields: ['freelancerId'],
      type: 'foreign key',
      name: 'fk_offers_freelancer',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Profiles', 'fk_profiles_user');
    await queryInterface.removeConstraint('Jobs', 'fk_jobs_client');
    await queryInterface.removeConstraint('Offers', 'fk_offers_job');
    await queryInterface.removeConstraint('Offers', 'fk_offers_freelancer');
  }
};
