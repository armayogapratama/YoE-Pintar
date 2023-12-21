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
     res.render("login")
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async register(req, res) {
    const { username, email, password, role } = req.body;
    try {
      await User.create({ username, email, password, role });
      res.redirect("/login");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async login(req, res) {
    const { email , password }= req.body
    try {
     
      const user = await User.findOne({ where:{ email }});
      
      if (!user) throw new Error('Invalid Email')

      if(!user.verify(password)) throw new Error("Invalid Password")
     res.redirect("/courses")
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
