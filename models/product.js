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
      Product.belongsTo(models.Category);
      Product.belongsToMany(models.Account, { through: models.AccountProduct });
      Product.hasMany(models.AccountProduct);
    }

    // NANTI BIKIN QR DISINI
    // NANTI BIKIN SEARCH DISINI
  }
  Product.init(
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "ProductName cannot be empty",
          },
          notNull: {
            msg: "ProductName cannot be null",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "description cannot be empty",
          },
          notNull: {
            msg: "description cannot be null",
          },
        },
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "imageUrl cannot be empty",
          },
          notNull: {
            msg: "imageUrl cannot be null",
          },
        },
      },
      stock: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "stock cannot be empty",
          },
          notNull: {
            msg: "stock cannot be null",
          },
          min: {
            args: [0],
            msg: "stock must be greater than 0",
          },
        },
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "price cannot be empty",
          },
          notNull: {
            msg: "price cannot be null",
          },
          min: {
            args: [0],
            msg: "stock must be greater than 0",
          },
        },
      },
      CategoryId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "category cannot be empty",
          },
          notNull: {
            msg: "category cannot be null",
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
