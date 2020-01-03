'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    taskId: {
      type: DataTypes.INTEGER,
      primaryKey: true
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
    // TODO: Task.belongsTo(models['Employee'], {foreignKey: 'creatorId'});
    // TODO DETALII: https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

    Task.belongsTo(models.Project,{foreignKey: 'projectId'});
    Task.hasOne(models.TimeTracker);
    Task.belongsToMany(models.User,{through: "UserTask",foreignKey:"taskId"});

  };
  return Task;
};