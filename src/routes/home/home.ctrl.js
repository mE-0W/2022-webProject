"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};



module.exports = {
  home,
  login,
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