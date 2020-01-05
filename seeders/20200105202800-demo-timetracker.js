'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('TimeTrackers', [
      {
        estimated: "10",
        remaining:"4",
        logged: "6",
        taskId: "1006"
      },
      {
        estimated: "11",
        remaining:"5",
        logged: "6",
        taskId: "1007"
      },
      {
        estimated: "12",
        remaining:"6",
        logged: "6",
        taskId: "1008"
      },
      {
        estimated: "10",
        remaining:"4",
        logged: "6",
        taskId: "1009"
      },
      {
        estimated: "10",
        remaining:"4",
        logged: "6",
        taskId: "1010"
      },
      {
        estimated: "10",
        remaining:"4",
        logged: "6",
        taskId: "1011"
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('TimeTrackers', null, {});
  }
};

