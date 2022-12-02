"use strict";

const UserStorage = require("../../models/UserStorage");

const output ={
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process ={
  login: (req, res) => {
    const id = req.body.id;
    const passwd = req.body.passwd;

    /* UserStorage에 있는 데이터를 가져옴 */
    const users = UserStorage.getUsers("id", "passwd");
    const response = {};
    /* 로그인 검증 (사용자 검증) 로직 */
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.passwd[idx] === passwd){
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다."
    return res.json(response);
  },
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