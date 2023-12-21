"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Course);
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      cost: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
