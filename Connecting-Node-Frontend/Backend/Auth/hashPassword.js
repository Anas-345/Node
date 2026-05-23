import { compare, hash } from "bcrypt";

export async function hashPassword(password) {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
}

export async function checkPassword(inputPassword, hashedPassword) {
  const isMatch = await compare(inputPassword, hashedPassword);
  return isMatch;
}
