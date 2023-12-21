const {
  User,
  Profile,
  Course,
  Category,
  UserCourse,
} = require("../models/index");

class Controller {
  static home(req, res) {
    res.send("Hello World!");
  }

  // User Route
  static async allUser(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["username", "email", "password"],
      });
      res.send(users);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async readMore(req, res) {
    const { id } = req.params;
    try {
      const profile = await Profile.findByPk(id, {
        attributes: ["name", "dateOfBirth", "hobby", "gender"],
      });
      res.send(profile);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  // Course Route
  static async allCourse(req, res) {
    try {
      const course = await Course.findAll({
        attributes: ["name", "description", "duration"],
        include: {
          model: Category,
          attributes: ["name", "cost"],
        },
      });
      res.send(course);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async seeMore(req, res) {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id, {
        attributes: ["name", "cost"],
      });
      res.send(category);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  // Category Route
  static async allCategory(req, res) {
    try {
      const categories = await Category.findAll({
        attributes: ["name", "cost"],
      });
      res.send(categories);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async addCategory(req, res) {
    try {
      res.send("Add Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async createCategory(req, res) {
    try {
      res.send("Create Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async editCategory(req, res) {
    try {
      res.send("Edit Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async updateCategory(req, res) {
    try {
      res.send("Update Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async deleteCategory(req, res) {
    try {
      res.send("Delete Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = Controller;
