'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.User,{foreignKey: 'creatorId'});
    Project.hasMany(models.Task,{foreignKey:'projectId'});

  };
  return Project;
};