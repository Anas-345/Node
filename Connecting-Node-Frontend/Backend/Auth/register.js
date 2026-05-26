import { readingFile, updatingFile } from "../fileOperations.js";
import { findingUser } from "./findingUser.js";
import { hashPassword } from "./hashPassword.js";

export function register(res, req) {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", async () => {
    data = JSON.parse(data);
    const userFound = await findingUser(data.email);
    if (userFound) {
      res.end(
        JSON.stringify({ content: "User already exists", type: "error" }),
      );
      return;
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
