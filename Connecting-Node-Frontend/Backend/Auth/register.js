import { readingFile, updatingFile } from "../fileOperations.js";
import { hashPassword } from "./hashPassword.js";

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
    const password = await hashPassword(data.password);
    updatingFile({ ...data, password });
    res.end(
      JSON.stringify({
        content: "User registered successfully",
        type: "success",
      }),
    );
  });
}
