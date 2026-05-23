import { readingFile } from "../fileOperations.js";

export function login(res, req) {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", async () => {
    data = JSON.parse(data);
    const fileData = await readingFile();
    if (fileData) {
      const userFound = JSON.parse(fileData).find(
        (u) => u.email === data.email && u.password === data.password,
      );
      if (userFound) {
        res.end(
          JSON.stringify({ content: "Login successfull", type: "success" }),
        );
        return;
      }
    }
    res.end(JSON.stringify({ content: "User not found", type: "error" }));
  });
}
