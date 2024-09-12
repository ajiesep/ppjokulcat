const { where } = require("sequelize");
const { Product, Category, AccountProduct, Account } = require("../models");

class SellerController {
  static async listProduct(req, res) {
    try {
      let products = await Product.findAll({
        include: [
          {
            model: Category,
          },
          {
            model: Account,
            where: { id: sellerId },
          },
        ],
      });

      res.render("sellerHome", { products });
    } catch (error) {
      res.send(error.message);
    }
  }

  static async addProduct(req, res) {
    try {
      const categories = await Category.findAll();
      res.render("addProduct", {
        title: "Add Product",
        categories,
        errors,
        sellerId,
      });
    } catch (error) {
      res.send(error.message);
    }
  }

  static async postProduct(req, res) {
    try {
      res.redirect(`/seller/${sellerId}`);
    } catch (error) {
      const { sellerId } = req.params;
      if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
      ) {
        error = error.errors.map((el) => el.message);
        res.redirect(`/seller/${sellerId}/product/add?errors=${error}`);
      } else {
        res.send(error.message);
      }
    }
  }

  static async editProduct(req, res) {
    try {
      const { errors } = req.query;
      const { id, sellerId } = req.params;
      const product = await Product.findByPk(id);
      const categories = await Category.findAll();
      res.render("editProduct", {
        title: "Edit Product",
        product,
        categories,
        errors,
        sellerId,
      });
    } catch (error) {
      res.send(error.message);
    }
  }

  static async postEditProduct(req, res) {
    try {
      const { id, sellerId } = req.params;
      const { productName, imageURL, CategoryId, price, stock, desription } =
        req.body;

      await Product.update(
        { productName, imageURL, CategoryId, price, stock, desription },
        { where: { id } }
      );
    } catch (error) {
      const { id, sellerId } = req.params;
      if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
      ) {
        error = error.errors.map((el) => el.message);
        res.redirect(``);
      } else {
        res.send(error.message);
      }
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id, sellerId } = req.params;
      let deletProduct = await Product.findByPk(+id);

      await AccountProduct.destroy({
        where: { AccountId: sellerId, ProductId: id },
      });
      await Product.destroy({ where: { id } });
      res.redirect(``);
    } catch (error) {
      res.send(error.message);
    }
  }
}

module.exports = SellerController;
