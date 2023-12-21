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
        attributes: ["name", "description", "duration"],
        include: {
          model: Category,
          attributes: ["name", "cost"],
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
      const categories= await Category.findAll()
      res.render("addcourse",{ categories })
      // res.send("Add Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async createCourse(req, res) {
    try {
      res.send("Create Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async editCourse(req, res) {
    try {
      res.send("Edit Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async updateCourse(req, res) {
    try {
      res.send("Update Category");
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
