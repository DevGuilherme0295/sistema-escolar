'use strict';

const CreatedUpdated = require("../models/CreatedAndUpdated");


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('matriculas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      registration: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      turma_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'turmas',
          key: 'id'
        }
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'alunos',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1
      },

      ...CreatedUpdated
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('matriculas');
  }
};
