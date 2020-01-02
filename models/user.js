'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    password: DataTypes.STRING,
    isLoggedIn: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // TODO DETALII: https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7
  };
  return User;
};