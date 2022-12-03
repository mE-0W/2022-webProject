"use strict";

const User = require("../../models/User");
const db = require('../../public/db/home/config');

const output = {
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
    // const user = new User(req.body);
    // const response = user.login();
    // return res.json(response);

    const param = [req.body.id, req.body.passwd];
    var dataList = [];
    var count = 0;
    var selectData = "null"

    db.query('SELECT userID FROM usertable', (err, result) => {
      for (var data of result) {
        dataList.push(data.userID);
        count++;
      };
      //console.log(dataList);
    })


    db.query('SELECT * FROM usertable WHERE userID=?', param[0], (err, row) => {
      if (err) console.log(err)

      for (var i = 0; i < count; i++) {
        if (dataList[i] === param[0]) {
          selectData = dataList[i];
        }
      }

      if (selectData !== "null") {
        if (param[1] === row[0].passwd) {
          //return { success: true };
          console.log("성공")
          return { success: true };
        }
        else alert("비밀번호가 틀렸습니다.");
      }
      else console.log("존재하지 않는 아이디입니다.");

    })
      


  },

  register: (req, res) => {

    const param = [req.body.name, req.body.id, req.body.passwd]

    db.query('INSERT INTO usertable(`name`, `userID`,`passwd`) VALUES(?,?,?)', param, (err, row) => {
      if (err) {
        console.log(err)
      }
      const response = { success: true };
      return res.json(response);

    });
    return { success: true };
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