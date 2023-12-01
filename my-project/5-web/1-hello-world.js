const http = require("http");

const requestListener = (req, res) => {
  console.log(req.url);
  //console.dir(req, { depth: 0 });
  //console.log(req);
  res.write("Hello World!!\n");
  res.end();
};

const server = http.createServer(requestListener);
server.on("request", requestListener);

server.listen(4242, () => {
  console.log("Server is Running....");
});
