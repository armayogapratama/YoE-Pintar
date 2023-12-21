class Middleware {
  static hasloged(req, res, next) {
    const isLogin = !!req.session.user;
    if (!isLogin) {
      res.redirect("/login");
    } else {
      next();
    }
  }

  static hasGuest(req, res, next) {
    const isGuest = !req.session.user;
    if (!isGuest) {
      res.redirect("/courses");
    } else {
      next();
    }
  }

  static admin(req, res, next) {
    const isAdmin = req.session.user.role === "Instructor";
    if (!isAdmin) {
      res.send(`You don't have permission to access admin key`);
    } else {
      next();
    }
  }
}

module.exports = Middleware;
