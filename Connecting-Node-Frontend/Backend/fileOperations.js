import * as fs from "node:fs/promises";

const fileName = "dummy.json";

export async function readingFile() {
  return await fs.readFile(fileName, 'utf-8');
}

export async function createFile() {
  await fs.writeFile(
    fileName,
    JSON.stringify({ message: "I am dummy data you called me" }),
  );
}
