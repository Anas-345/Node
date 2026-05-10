import http from "node:http";
import { readingFile, updatingFile } from "./fileOperations.js";

const server = http.createServer((req, res) => {
  let newData = "";

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  req.on("data", (chunk) => (newData += chunk.toString()));

  req.on("end", async () => {
    if (newData) {
      console.log(newData);
      await updatingFile(newData);
    }

    const data = await readingFile();

    res.end(data);
  });
});

server.listen(3000, () => console.log("I am running"));
