'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tasks', [
       //PROJECT 1 - Infiltrate the ministry, initated by Kingsley Shackebolt(id=10)
      {
        title: "Get access cards",
        type: "front-end",
        priority: "medium",
        status: "in-progress",
        resolution: "",
        description: "Get access cards in order to bypass ministry security",
        projectId: 1
      },
      {
        title: "Gather intelligence",
        type: "back-end",
        priority: "high",
        status: "in-progress",
        resolution: "",
        description: "Gather as much information as possible",
        projectId: 1
      },
      {
        title: "Set up a team",
        type: "front-end",
        priority: "low",
        status: "in-progress",
        resolution: "",
        description: "Construct a team of people for the break-in",
        projectId: 1
      },
      //PROJECT 3 - Place an order of unicorn hair, initated by Garrick Olivander(id=3)
      {
        title: "Place the order",
        type: "front-end",
        priority: "high",
        status: "in-progress",
        resolution: "",
        description: "Access the black marcket and order 10 strands of unicorn hair",
        projectId: 3
      },
      //Project 4 - Manufacture 3 winter robes, initated by Madam Malkin(id=4)
      {
        title: "Sew the robes",
        type: "back-end",
        priority: "high",
        status: "in-progress",
        resolution: "",
        description: "Sew the material",
        projectId: 4
      },
      {
        title: "Add finishing touches",
        type: "front-end",
        priority: "medium",
        status: "in-progress",
        resolution: "",
        description: "Add detail and polish",
        projectId: 4
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tasks', null, {});
  }
};
