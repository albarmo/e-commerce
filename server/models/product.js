"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.User, { through: models.Cart });
      Product.belongsToMany(models.User, { through: models.Wishlist });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "cant be empty",
          },
        },
      },
      image_url: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "cant be empty",
          },
        },
      },
      price: {
        type: DataTypes.NUMBER,
        validate: {
          notEmpty: {
            msg: "cant be empty",
          },
        },
      },
      stock: {
        type: DataTypes.NUMBER,
        validate: {
          notEmpty: {
            msg: "cant be empty",
          },
          min: { args: [0], msg: "stock habis" },
        },
      },
      category: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "cant be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
