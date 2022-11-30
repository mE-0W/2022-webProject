"use strict";

const app = require("../app")
const PROT = 3000;

app.listen(PROT, function () {
    console.log("서버 가동");
});