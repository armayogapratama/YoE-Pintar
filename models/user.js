"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile);
    }

    alterPassword() {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(this.password, salt);
      return hash;
    }

    verify(plainpassword){
      return bcrypt.compareSync(plainpassword,this.password)
    }
    
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((instance) => {
    instance.password = instance.alterPassword();
  });

  return User;
};
