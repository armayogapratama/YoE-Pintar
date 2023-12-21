"use strict";
const { Model } = require("sequelize");
const age = require("../helper/formatAge");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User);
    }

    get age() {
      return age(this.dateOfBirth);
    }
  }
  Profile.init(
    {
      name: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      hobby: DataTypes.STRING,
      gender: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
