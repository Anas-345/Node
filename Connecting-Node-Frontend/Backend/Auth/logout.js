import { readingFile, updatingFile } from "../fileOperations.js";
import { findingUser } from "./findingUser.js";

export function logout(res, req) {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", async () => {
    data = JSON.parse(data);

    const userFound = await findingUser(data.email);

    updatingFile(userFound, true, false);
    res.setHeader("Set-Cookie", "token=; HttpOnly; Path=/; Max-Age=0");
    res.end(
      JSON.stringify({
        content: "Logout successfull",
        type: "success",
      }),
    );
  });
}
