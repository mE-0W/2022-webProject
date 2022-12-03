// "use strict";

// class UserStorage {
//     //     static #users = {
//     //         id: ["nahee", "yiseo", "sua"],
//     //         passwd: ["1234", "1234", "1234"],
//     //         name: ["나희", "인서", "수아"], 
//     //       };

//     //     static getUsers(...fields) {
//     //         const users = this.#users;
//     //         const newUsers = fields.reduce((newUsers, field) => {
//     //             if (users.hasOwnProperty(field)) {
//     //                 newUsers[field] = users[field];
//     //             }
//     //             return newUsers;
//     //         }, {});
//     //         return newUsers;
//     //     }

//     //     static getUsersInfo(id) {
//     //         const users = this.#users;
//     //         const idx = users.id.indexOf(id);
//     //         const userKeys = Object.keys(users); // user의 Key 값을 리스트로 만듦
//     //         const userInfo = userKeys.reduce((newUser, info) => {
//     //             newUser[info] = users[info][idx];
//     //             return newUser;
//     //         }, {});

//     //         return userInfo;
//     //     }

//     static save() {
//         // const users = this.#users;
//         // users.name.push(userInfo.name);
//         // users.id.push(userInfo.id);
//         // users.passwd.push(userInfo.passwd);
//         // return { success: true };
//         // const param = [req.body.name, req.body.id, req.body.passwd]

//         const param = [req.body.name, req.body.id, req.body.passwd]

//         db.query('INSERT INTO usertable(`name`, `userID`,`passwd`) VALUES(?,?,?)', param, (err, row) => {
//           if (err) {
//             console.log(err)
//           }
//           const response = { success: true };
//           return res.json(response);
    
//         });
//         return { success: true };
//     }
// }


// module.exports = UserStorage;