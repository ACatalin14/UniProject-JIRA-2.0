'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Projects', [{
        title: "Infiltrate the ministry",
        url: "www.ministryofmagic.com",
        creatorId: "8"
      },
      {
        title: "Decorate the ice cream shop",
        url: "www.diagonalley/FFShop.com",
        creatorId: "2"
      },
      {
        title: "Place an order of unicorn hair",
        url: "www.theblackmaket.com",
        creatorId: "3"
      },
      {
        title: "Manufacture 3 winter robes",
        url: "www.madammalkin.com",
        creatorId: "4"
      },
      {
        title: "Brew a barrel of butter beer",
        url: "www.thethreebromsticks.com",
        creatorId: "5"
      },
      {
        title: "Get rid of a cursed necklace",
        url: "www.b&b.com",
        creatorId: "6"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Projects', null, {});
  }
};
