const { Op } = require("sequelize");
const receipt = require('receipt');
const {
  User,
  Profile,
  Course,
  Category,
  UserCourse,
} = require("../models/index");

class Controller {
  static home(req, res) {
    res.render("home");
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
      // res.send(profile);
      res.render("profile", { profile });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  // Course Route
  static async allCourse(req, res) {
    const { search, deleted } = req.query;

    const options = {
      attributes: ["id", "name", "description", "duration", "CategoryId"],
      include: {
        model: Category,
        attributes: ["id", "name", "cost"],
      },
    };

    if (search) {
      options.where = {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      };
    }

    try {
      const course = await Course.findAll(options);
      res.render("course", { course, deleted, user: req.session.user });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async addCourse(req, res) {
    const { errors } = req.query;
    try {
      const categories = await Category.findAll();
      res.render("addcourse", { categories, errors });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async createCourse(req, res) {
    try {
      await Course.create(req.body);
      res.redirect("/courses");
    } catch (error) {
      console.log(error);
      res.redirect(
        `/courses/add?errors=${error.errors.map((err) => err.message)}`
      );
    }
  }

  static async editCourse(req, res) {
    const { id } = req.params;
    const { errors } = req.query;
    try {
      const categories = await Category.findAll();
      const course = await Course.findOne({
        include: {
          model: Category,
        },
        where: { id: id },
      });
      res.render("editCourse", { course, categories, errors });
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
      res.redirect(
        `/courses/edit/${id}?errors=${error.errors.map((err) => err.message)}`
      );
    }
  }

  static async deleteCourse(req, res) {
    const { id } = req.params;
    try {
      const course = await Course.findOne({ where: { id: id } });
      await course.destroy();
      res.redirect(`/courses?deleted=${course.name} course has been deleted`);
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async buy(req,res){
    const { id } = req.params;
    try {
      const course = await Course.findOne({
        include:{
          model:Category,
        }
      },{ where: { id: id } });
     const  output = receipt.create([    
        { type: 'text', value: [
            'YoE Course',
            'Jakarta Indonesia',
            'Yoe@store.com',
            'www.yoe.com'
        ], align: 'center' },
        { type: 'empty' },
        { type: 'properties', lines: [
            { name: 'Date', value: new Date() },
            {name:"Nama Course", value:course.name },
            { name: 'Price', value:course.Category.cost}
        ] },
        { type: 'text', value: [
            'Terima Kasih Telah Langanan Course Kami'
        ], align: 'center' }
        ]);
      console.log(output)
      res.redirect("/courses")
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async addProfile(req,res){
    const { id }= req.params
    try {
      
      const userProfile = await User.findByPk(id)
      res.render("addprofile" , { userProfile } )
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async createProfile(req,res){
 
    try {
      await Profile.create(req.body)

      res.redirect("/users")
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
  
}

module.exports = Controller;
