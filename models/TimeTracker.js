'use strict';
module.exports = (sequelize, DataTypes) => {
  const TimeTracker = sequelize.define('TimeTracker', {
    taskId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    estimated: DataTypes.INTEGER,
    remaining: DataTypes.INTEGER,
    logged: DataTypes.INTEGER
    
  }, {});
  TimeTracker.associate = function(models) {
    // associations can be defined here
    // TODO: TimeTracker.belongsTo(models['Employee'], {foreignKey: 'creatorId'});
    // TODO DETALII: https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

    TimeTracker.belongsTo(models.Task,{foreignKey: 'taskId'});

  };
  return TimeTracker;
};