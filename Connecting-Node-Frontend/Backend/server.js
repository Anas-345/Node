import http from "node:http";
import { readingFile, updatingFile } from "./fileOperations.js";

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  try {
    res.writeHead(200, { "content-type": "application/json" });
    if (req.method === "POST" && req.url === "/register") {
      let data = "";
      req.on("data", (chunk) => (data += chunk));
      req.on("end", async () => {
        data = JSON.parse(data);
        const fileData = await readingFile();
        if (fileData) {
          const userFound = JSON.parse(fileData).find(
            (u) => u.email === data.email,
          );
          if (userFound) {
            res.end(
              JSON.stringify({ content: "User already exists", type: "error" }),
            );
            return;
          }
        }
        updatingFile(data);
      });
    }
    else { 
      res.end(JSON.stringify({content: 'hello'}))
    }
  } catch (error) {
    console.log("error", error);
  }
});

server.listen(3000, () => console.log("I am running"));
