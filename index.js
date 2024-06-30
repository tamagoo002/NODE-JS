// console.log("hello world");
//create local
const http = require("http");
const os = require("os");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    //calculate os ram
    const myRam = os.totalmem().os.fixed(2);
    //
    res.end(
      JSON.stringify({
        data: "Hello World!",
        data: myRam,
      })
    );
  })
  .listen(3000);
//use a fs module to read the content of file
//make hello .txt with content
//use fs
