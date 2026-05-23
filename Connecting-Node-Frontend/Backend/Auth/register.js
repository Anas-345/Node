import { readingFile, updatingFile } from "../fileOperations.js";

export function register(res, req) {
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
    res.end(
      JSON.stringify({
        content: "User registered successfully",
        type: "success",
      }),
    );
  });
}
