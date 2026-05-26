import { readingFile, updatingFile } from "../fileOperations.js";
import { findingUser } from "./findingUser.js";
import { checkPassword, hashPassword } from "./hashPassword.js";

export function login(res, req) {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", async () => {
    data = JSON.parse(data);
    const userFound = await findingUser(data.email);

    if (userFound) {
      const passwordMatch = await checkPassword(
        data.password,
        userFound.password,
      );
      if (passwordMatch) {
        updatingFile(userFound, true);
        res.setHeader(
          "Set-Cookie",
          `token=${data.email}; HttpOnly; Path=/; Max-Age=604800`,
        );
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
    res.end(JSON.stringify({ content: "User not found", type: "error" }));
  });
}
