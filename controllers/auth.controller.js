const { Op } = require("sequelize");
const {
  User,
  Profile,
  Course,
  Category,
  UserCourse,
} = require("../models/index");
class Authentic {
  static async registerForm(req, res) {
    try {
      res.render("register");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async loginForm(req, res) {
    try {
      res.render("login");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async register(req, res) {
    const { username, email, password, role } = req.body;
    try {
      await User.create({ username, email, password, role });
      res.redirect("/courses");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async login(req, res) {
    try {
      res.send("login");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async logout(req, res) {
    try {
      res.send("logout");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = Authentic;
