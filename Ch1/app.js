/**
 * 날짜: 2023.05.22
 * 이름: 조수빈
 * 내용: Hello Node.js 실습
 */

const http = require("http"); // http 모듈 불러오기
const url = require("url");

// 웹서버 열기
const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;

  if (path == "/") {
    res.end("Hello World!");
  }

  if (path == "/hello") {
    res.end("Hello Node.js");
  }

  if (path == "/welcome") {
    res.end("Welcome Node.js");
  }

  if (path == "/greeting") {
    res.end("Greetings Node.js");
  }

  //res.write("Hello Node.js"); // 문자열 출력
  //res.end(); // 클라이언트에 전송
});

server.listen(3000, () => {
  // 3000은 포트 번호
  console.log("app 실행");
});
