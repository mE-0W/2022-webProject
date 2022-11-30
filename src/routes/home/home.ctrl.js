"use strict";

const output ={
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["nahee", "yiseo", "sua"],
  passwd: ["1234", "1234", "1234"],
};

const process ={
  login: (req, res) => {
    const id = req.body.id,
    passwd = req.body.passwd;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.passwd[idx] === passwd){
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
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