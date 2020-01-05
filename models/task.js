'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    taskId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    resolution: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.Project,{foreignKey: 'projectId'});
    Task.hasOne(models.TimeTracker,{foreignKey:'taskId'});
    Task.belongsToMany(models.User,{through: "UserTask",foreignKey:"taskId"});

  };
  return Task;
};