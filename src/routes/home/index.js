"use strict"; // 엄격 모드 / 디버깅이 쉬워지고 발생 가능한 에러들을 예방한다.

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); // controller file을 불러옴

router.get("/", ctrl.output.home); // home 객체에 접근
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router; // 객체를 내보내주기 위한 명령어