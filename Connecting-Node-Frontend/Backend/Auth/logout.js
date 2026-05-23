import { readingFile, updatingFile } from "../fileOperations.js";

export function logout(res, req) {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", async () => {
    data = JSON.parse(data);
    const fileData = await readingFile();
    const userFound = JSON.parse(fileData).find((u) => u.email === data.email);
    updatingFile(userFound, true, false);
    res.end(
      JSON.stringify({
        content: "Logout successfull",
        type: "success",
      }),
    );
  });
}
