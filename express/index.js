const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("hello World!");
});

app.listen(port, () => {
  console.log(port + "포트에 서버가 열렸습니다!");
});
