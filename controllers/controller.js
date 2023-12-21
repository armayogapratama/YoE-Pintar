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
        attributes: ["id", "username", "email", "role"],
      });
      res.render("user", { users });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async profile(req, res) {
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
        attributes: ["id", "name", "description", "duration", "CategoryId"],
        include: {
          model: Category,
          attributes: ["id", "name", "cost"],
        },
      });
      res.render("course", { course });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async addCourse(req, res) {
    try {
      const categories = await Category.findAll();
      res.render("addcourse", { categories });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async createCourse(req, res) {
    try {
      await Course.create(req.body)
      res.redirect("/courses")
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async editCourse(req, res) {
    const { id } = req.params;
    try {
      const categories = await Category.findAll();
      const course = await Course.findOne({
        include: {
          model: Category,
        },
        where: { id: id },
      });
      res.render("editCourse", { course, categories });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async updateCourse(req, res) {
    const { id } = req.params;
    const { name, description, duration, CategoryId } = req.body;
    try {
      const course = await Course.findOne({
        include: {
          model: Category,
        },
        where: { id: id },
      });
      await course.update({ name, description, duration, CategoryId });
      res.redirect("/courses");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async deleteCourse(req, res) {
    try {
      res.send("Delete Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = Controller;
