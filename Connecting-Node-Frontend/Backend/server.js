import http from "node:http";
import { createFile, readingFile } from "./fileOperations.js";

createFile();

const data = await readingFile();

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.end(data);
});

server.listen(3000, () => console.log("I am running"));
