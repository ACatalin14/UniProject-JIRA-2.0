'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      taskId: {
        allowNull: false,
        //autoIncrement: true, ??
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estimated: {
        type: Sequelize.INTEGER
      },
      remaining: {
        type: Sequelize.INTEGER
      },
      logged: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Projects');
  }
};