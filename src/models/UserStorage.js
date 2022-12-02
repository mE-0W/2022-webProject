"use strict";

class UserStorage {
    static #users = {
        id: ["nahee", "yiseo", "sua"],
        passwd: ["1234", "1234", "1234"],
        name: ["나희", "인서", "수아"], 
      };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}


module.exports = UserStorage;