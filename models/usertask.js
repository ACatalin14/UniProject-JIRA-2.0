'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTask = sequelize.define('UserTask', {
    
    userId: DataTypes.UUID,
    taskId: DataTypes.UUID,
    role: DataTypes.STRING
  }, {});
  UserTask.associate = function(models) {
    // associations can be defined here
  };
  return UserTask;
};