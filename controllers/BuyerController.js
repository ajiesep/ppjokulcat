const { Product, Category } = require("../models");
const category = require("../models/category");

class BuyerController {
  static async home(req, res) {
    try {
      const categories = await Category.findAll();
      const products = await Product.findAll({
        include: [Category],
      });
      res.render("home", { products, categories });
    } catch (error) {
      res.send(error.message);
    }
  }

  static async categories(req, res) {
    try {
      const categories = await Category.findAll();
      const products = await Product.findAll();

      res.render("allCategory", { products, categories });
    } catch (error) {
      res.send(error.message);
    }
  }

  static async buyProduct(req, res) {
    try {
      const { id } = req.params;
      let product = await Product.findByPk(+id, {
        include: [Category],
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}

module.exports = BuyerController;
