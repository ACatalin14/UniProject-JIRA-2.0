'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email: 'john.doe@yahoo.com',
        jobTitle: 'Janitor',
        password: '1234'
      },
      {
        name: 'Florean Fortesque',
        email: 'florean.fortesque@yahoo.com',
        jobTitle: 'Ice Cream Seller',
        password: '1234'
      },
      {
        name: 'Garrick Olivander',
        email: 'garrick.olivander@yahoo.com',
        jobTitle: 'Wand Maker',
        password: '1234'
      },
      {
        name: 'Madam Malkin',
        email: 'madam.malkin@yahoo.com',
        jobTitle: 'Robes Fitter',
        password: '1234'
      },
      {
        name: 'Madam Rosmerta',
        email: 'madam.rosmerta@yahoo.com',
        jobTitle: 'Pub owner',
        password: '1234'
      },
      {
        name: 'Caractacus Burke',
        email: 'caractacus.burke@yahoo.com',
        jobTitle: 'Dark Arts Shop owner',
        password: '1234'
      },
      {
        name: 'Madam Puddifoot',
        email: 'madam.puddifoor@yahoo.com',
        jobTitle: 'Tea Shop owner',
        password: '1234'
      },
      {
        name: 'Kingsley Shacklebolt',
        email: 'kingsley.shacklebolt@yahoo.com',
        jobTitle: 'Prime minister',
        password: '1234'
      },
      {
        name: 'Nigelus Black',
        email: 'nigelus.black@yahoo.com',
        jobTitle: 'Headmaster',
        password: '1234'
      },
      {
        name: 'Amelia Bones',
        email: 'amelia.bones@yahoo.com',
        jobTitle: 'Judge',
        password: '1234'
      },
      {
        name: 'Mafalda Hopkirk',
        email: 'mafalda.hopkirk@yahoo.com',
        jobTitle: 'Improper use of magic enforcement',
        password: '1234'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
