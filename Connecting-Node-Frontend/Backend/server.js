import http from "node:http";
import { readingFile, updatingFile } from "./fileOperations.js";

const server = http.createServer(async (req, res) => {
  let newData = "";

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  if (req.url === "/" && req.method === "GET") {
    const data = await readingFile();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else if (req.url === "/" && req.method === "POST") {
    req.on("data", (chunk) => {
      newData += chunk;
    });
    req.on("end", async () => {
      const data = await readingFile()
      const findingEmail = JSON.parse(data).find(user => user.email === JSON.parse(newData)?.email)
      console.log('JSON.parse(newData).email', JSON.parse(newData))
      if (findingEmail) {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(
          JSON.stringify({ content: "User already exists", type: "error" }),
        );
        return
      }
      await updatingFile(newData);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({ content: "User added successfully", type: "success" }),
      );
    });
  }
});

server.listen(3000, () => console.log("I am running"));
