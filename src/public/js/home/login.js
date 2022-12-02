"use strict";

//const { json } = require("body-parser");

// DOM : 문서 객체 모델
const id = document.querySelector("#id");
const passwd = document.querySelector("#passwd");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        passwd: passwd.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
         location = "/";
        } else {
            alert(res.msg);
        }
     })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
};

