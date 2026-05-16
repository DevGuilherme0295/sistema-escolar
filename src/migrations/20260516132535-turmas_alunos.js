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
    await queryInterface.createTable('turmas_alunos', {
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

    await queryInterface.dropTable('turmas_alunos');
  }
};
