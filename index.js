// // console.log("hello world");
// //create local
// const http = require("http");
// const os = require("os");
// const fs = require("fs");
// // http
// //   .createServer((req, res) => {
// //     res.writeHead(200, { "Content-Type": "application/json" });
// //     //calculate os ram
// //     const myRam = os.totalmem().os.fixed(2);
// //     //
// //     res.end(
// //       JSON.stringify({
// //         data: "Hello World!",
// //         data: myRam,
// //       })
// //     );
// //   })
// //   .listen(3000);
// //use a fs module to read the content of file
// //make hello .txt with content
// //use fs
// const data = "Hello,world!";
// fs.writeFile("myile.txt", data, () => {});

// fs.readFile("myile.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile("hello.txt", "hello", () => {});
// fs.writefile("hello2.txt", "helloo again", () => {});
// const fs = require("fs");
// const createdoc = (data, path) => {
//   return fs.writefilesync(path, data);
// };
// createdoc("hello", "./hello.txt");

// //require
// //module.exports
// const textmanipulater=require("./string");
// const { properCase, slugify, truncate } = require("./string");

const events = require("events");
const eventEmitter = new events.EventEmitter();

// create event handler
const myeventhandler = () => {
  console.log("I hear a scream");
};

// assign handler to event
eventEmitter.on("scream", myeventhandler);

// emit/fire event
eventEmitter.emit("scream");
