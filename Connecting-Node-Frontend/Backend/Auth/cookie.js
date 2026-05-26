import { findingUser } from "./findingUser.js";

export async function cookieData(res, req) {
  const cookies = req.headers.cookie;
  if (cookies) {
    const cookieToken = cookies.split("=")[1];

    const userFound = await findingUser(cookieToken);
    if (userFound) {
      res.end(JSON.stringify({ type: "success", userFound }));
      return;
    }
  }
  res.end(JSON.stringify({ type: "error" }));
}
