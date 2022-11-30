"use strict";

//const { json } = require("body-parser");

// DOM : 문서 객체 모델
const id = document.querySelector("#id");
const psword = document.querySelector("#passwd");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        passwd: passwd.value,
    };
    console.log(req);
};

