import http from "node:http";
import { readingFile, updatingFile } from "./fileOperations.js";
import { register } from "./Auth/register.js";
import { login } from "./Auth/login.js";
import { logout } from "./Auth/logout.js";
import { cookieData } from "./Auth/cookie.js";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    res.setHeader("content-type", "application/json");
    if (req.method === "POST" && req.url === "/register") register(res, req);
    else if (req.method === "POST" && req.url === "/login") login(res, req);
    else if (req.method === "POST" && req.url === "/logout") logout(res, req);
    else if (req.method === "GET" && req.url === "/me") cookieData(res, req);
    else {
      res.end(JSON.stringify({ content: "hello" }));
    }
  } catch (error) {
    console.log("error", error);
  }
});

server.listen(3000, () => console.log("I am running"));
