class Controller {
  static home(req, res) {
    res.send("Hello World!");
  }

  // User Route
  static async allUser(req, res) {
    try {
      res.send("All User");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async readMore(req, res) {
    try {
      res.send("Read More User");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  // Course Route
  static async allCourse(req, res) {
    try {
      res.send("All Course");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async seeMore(req, res) {
    try {
      res.send("Read More Category");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  // Category Route
  static async allCategory(req, res) {
    try {
      res.send("All Category");
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
