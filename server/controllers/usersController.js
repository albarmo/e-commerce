const { User } = require("../models");
const { getToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

class userController {
  static register(req, res) {
    const input = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    User.create(input)
      .then((user) => {
        return res.status(201).json({
          id: user.id,
          username: user.username,
          email: user.email,
          password: user.password,
          role: user.role,
        });
      })
      .catch((err) => {
        console.log(err, "err dari register");
        return res.status(500).json({ msg: err.message });
      });
  }

  static login(req, res) {
    let userLogin = {
      email: req.body.email,
      password: req.body.password,
    };
    User.findOne({
      where: {
        email: userLogin.email,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(401).json({
            msg: `invalid email or password`,
          });
        } else if (!comparePassword(userLogin.password, user.password)) {
          res.status(401).json({
            msg: `invalid email or password`,
          });
        } else {
          const access_token = getToken({
            id: user.id,
            email: user.email,
          });
          const iduser = user.id;
          const role = user.role;
          console.log("sucess.login");
          return res.status(200).json({ access_token, iduser, role });
        }
      })
      .catch((err) => {
        console.log("failed login");
        console.log(err);
        return res.status(500).json(err);
      });
  }
}

module.exports = userController;
