/**
 * 날짜: 2023.05.22
 * 이름: 조수빈
 * 내용: Express 실습하기
 */

const express = require("express");
const app = express();

// template engine 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// route 설정
app.get("/", (req, res) => {
  const data = {
    tit1: "Node.js Express",
    tit2: "EJS Template Engine",
    result1: true,
    result2: false,
    score: 86,
    user: {
      uid: "a101",
      name: "홍길동",
      hp: "010-1234-2001",
      age: 21,
    },

    users: [
      { uid: "p101", name: "김유신", hp: "010-1234-1001", age: 23 },
      { uid: "p102", name: "김춘추", hp: "010-1234-1002", age: 21 },
      { uid: "p103", name: "장보고", hp: "010-1234-1003", age: 33 },
      { uid: "p104", name: "강감찬", hp: "010-1234-1004", age: 43 },
      { uid: "p105", name: "이순신", hp: "010-1234-1005", age: 53 },
    ],
  };

  res.render("index", data); // index라는 이름을 가진 파일을 화면에 보여주기; 위에 template engine 설정에서 템플릿 파일들 있는 위치와 파일 확장자 지정해주었기 때문에 여기서는 이름만 명시해주면 됨
});

app.get("/sub/hello", (req, res) => {
  res.render("sub/hello");
});

app.get("/sub/welcome", (req, res) => {
  res.render("sub/welcome");
});

app.get("/sub/greeting", (req, res) => {
  res.render("sub/greeting");
});

app.listen(3000, () => {
  console.log("3000 실행 중");
});
