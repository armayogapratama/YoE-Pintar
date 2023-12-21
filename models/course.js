"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Category);
    }
  }
  Course.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Name is required`,
          },
          notEmpty: {
            msg: `Name is required`,
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Description is required`,
          },
          notEmpty: {
            msg: `Description is required`,
          },
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Duration is required`,
          },
          notEmpty: {
            msg: `Duration is required`,
          },
          min: {
            args: 30,
            msg: `Minimum Duration of Bootcamp is 30 Days`,
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Category is required`,
          },
          notEmpty: {
            msg: `Category is required`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
