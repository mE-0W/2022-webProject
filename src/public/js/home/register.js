"use strict";

//const { json } = require("body-parser");

// DOM : 문서 객체 모델
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    passwd = document.querySelector("#passwd"),
    confirmPasswd = document.querySelector("#confirm-passwd"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        passwd: passwd.value,
        confirmPasswd: confirmPasswd.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
         location = "/login";
        } else {
            alert(res.msg);
        }
     })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
};

