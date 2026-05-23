import { readingFile, updatingFile } from "../fileOperations.js";
import { checkPassword, hashPassword } from "./hashPassword.js";

export async function login(res, req) {
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
        const passwordMatch = await checkPassword(
          data.password,
          userFound.password,
        );
        if (passwordMatch) {
          updatingFile(userFound, true);
          res.end(
            JSON.stringify({
              content: "Login successfull",
              type: "success",
              userFound: { ...userFound, active: true },
            }),
          );
          return;
        }
      }
    }
    res.end(JSON.stringify({ content: "User not found", type: "error" }));
  });
}
