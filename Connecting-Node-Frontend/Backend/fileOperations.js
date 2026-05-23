import * as fs from "node:fs/promises";

const fileName = "dummy.json";

export async function readingFile() {
  return await fs.readFile(fileName, "utf-8");
}

export async function createFile(content) {
  await fs.writeFile(fileName, content);
}

export async function updatingFile(userData, update = false, active = true) {
  let data = await readingFile();
  data = data ? JSON.parse(data) : [];
  if (update) {
    data = data.map((u) =>
      u.email === userData.email ? { ...u, active } : u,
    );
  } else {
    data.push(userData);
  }
  await createFile(JSON.stringify(data));
}
