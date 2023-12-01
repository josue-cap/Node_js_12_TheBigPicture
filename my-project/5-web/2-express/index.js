const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello Express!");
});

server.get("/express", (req, res) => {
  res.send("Hello mudafucka!");
});

server.listen(4242, () => {
  console.log("Server listening...");
});
