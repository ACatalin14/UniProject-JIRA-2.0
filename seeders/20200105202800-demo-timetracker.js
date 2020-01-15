'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('TimeTrackers', [
      {
        estimated: "10",
        remaining:"4",
        logged: "6",
        taskId: "1"
      },
      {
        estimated: "11",
        remaining:"5",
        logged: "6",
        taskId: "2"
      },
      {
        estimated: "12",
        remaining:"6",
        logged: "6",
        taskId: "3"
      },
      {
        estimated: "10",
        remaining:"4",
        logged: "6",
        taskId: "4"
      },
      {
        estimated: "10",
        remaining:"4",
        logged: "6",
        taskId: "5"
      },
      {
        estimated: "10",
        remaining:"4",
        logged: "6",
        taskId: "6"
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('TimeTrackers', null, {});
  }
};

