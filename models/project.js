'use strict';
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        title: DataTypes.STRING,
        url: DataTypes.STRING
    }, {});
    Project.associate = function(models) {
        // associations can be defined here
    };
    return Project;
};