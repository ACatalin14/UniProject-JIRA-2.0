'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    // TODO: Project.belongsTo(models['Employee'], {foreignKey: 'creatorId'});
    // TODO DETALII: https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7
  };
  return Project;
};