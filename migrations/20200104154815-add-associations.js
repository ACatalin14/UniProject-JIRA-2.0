'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Project belongsTo User
    return queryInterface.addColumn(
      'Projects', // name of Source model
      'creatorId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          key: 'userId', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
    .then(() => {
      // Task belongsTo Project
      return queryInterface.addColumn(
        'Tasks', // name of Source model
        'projectId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Projects', // name of Target model
            key: 'projectId', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
      );
    })
    .then(() => {
      // Task hasOne TimeTracker
      return queryInterface.addConstraint(
        'TimeTrackers',
        ['taskId'],
        {
          type: 'foreign key',
          name: 'fk-timetrackers-tasks',
          references: {
            table: 'Tasks',
            field: 'taskId',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
          }
      );
    })
    .then(() => {
      // Task belongsToMany User
      return queryInterface.createTable(
        'UserTask',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          userId: {
            type: Sequelize.INTEGER,
          },
          taskId: {
            type: Sequelize.INTEGER,
          },
          role: {
            allowNull: false,
            type: Sequelize.STRING
          }
        }
      )
      .then(() => {
        // create FK for userId in UserTask table
        return queryInterface.addConstraint(
          'UserTask',
          ['userId'],
          {
            type: 'foreign key',
            name: 'fk-usertasks-users',
            references: {
              table: 'Users',
              field: 'userId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        );
      })
      .then(() => {
        // create FK for taskId in UserTask table
        return queryInterface.addConstraint(
          'UserTask',
          ['taskId'],
          {
            type: 'foreign key',
            name: 'fk-usertasks-tasks',
            references: {
              table: 'Tasks',
              field: 'taskId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        );
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove Project belongsTo User
    return queryInterface.removeColumn(
      'Projects', // name of Source model
      'creatorId' // key we want to remove
    )
    .then(() => {
      // remove Project belongsTo User
      return queryInterface.removeColumn(
        'Tasks', // name of Source model
        'projectId' // key we want to remove
      )
    })
    .then(() => {
      // remove Task hasOne TimeTracker
      return queryInterface.removeConstraint(
        'TimeTrackers',
        'fk-timetrackers-tasks'
      );
    })
    .then(() => {
      // remove Task belongsToMany User
      return queryInterface.dropTable('UserTask')
    });
  }
};
