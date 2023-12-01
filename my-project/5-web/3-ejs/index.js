const express = require("express");
const server = express();
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("index");
});
server.get("/about", (req, res) => {
  res.render("about");
});
server.get("/express", (req, res) => {
  res.send("Hello mudafucka!");
});

server.listen(4242, () => {
  console.log("Server listening...");
});
