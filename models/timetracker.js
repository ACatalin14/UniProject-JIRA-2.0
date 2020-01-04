'use strict';
module.exports = (sequelize, DataTypes) => {
  const TimeTracker = sequelize.define('TimeTracker', {
    taskId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    estimated: DataTypes.INTEGER,
    remaining: DataTypes.INTEGER,
    logged: DataTypes.INTEGER
    
  }, {});
  TimeTracker.associate = function(models) {
    // associations can be defined here
    TimeTracker.belongsTo(models.Task,{foreignKey: 'taskId', targetKey: 'taskId'});

  };
  return TimeTracker;
};