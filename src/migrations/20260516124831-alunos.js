'use strict';

const CreatedUpdated = require("../models/CreatedAndUpdated");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      surname: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      document: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      document_type: {
        type: Sequelize.STRING(10),
        allowNull: false
      },

      ...CreatedUpdated


    })

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('alunos');
  }
};
