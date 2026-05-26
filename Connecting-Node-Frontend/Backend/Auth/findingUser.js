import { readingFile } from "../fileOperations.js";

export async function findingUser(comparingEmail) {
  const fileData = await readingFile();

  if (fileData) {
    return JSON.parse(fileData).find((u) => u.email === comparingEmail);
  }
  return null;
}
