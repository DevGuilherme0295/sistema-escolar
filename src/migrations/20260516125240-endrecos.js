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
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'aluno',
          key: 'id'
        },
      },
      city: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      neighborhood: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      street: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      completment: {
        type: Sequelize.STRING(255),
        allowNull: false
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
    await queryInterface.dropTable('enderecos');
  }
};
