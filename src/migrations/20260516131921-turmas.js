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
    await queryInterface.createTable('turmas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cursos',
          key: 'id'
        }
      },
      colaborador_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'colaborador',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      start_time: {
        type: Sequelize.TIME
      },
      
      end_time: {
        type: Sequelize.TIME
      },
      
      start_date: {
        type: Sequelize.DATE
      },
      
      end_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('turmas');
  }
};
