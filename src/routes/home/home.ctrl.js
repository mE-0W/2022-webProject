"use strict";

const User = require("../../models/User");

const output ={
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  }
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },

  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  }
}




module.exports = {
  output,
  process,
};






// const output = {
//   // 해당 페이지를 랜더링 해주는 함수
//   home: (req, res) => {
//     res.render("home/index");
//   },
//   login: (req, res) => {
//     res.render("home/login");
//   },
// }



// const process = {
//   login: (req, res) => {
//     console.log(req.body);
//   },
// };


// module.exports = {
//   output,
//   process,
// };