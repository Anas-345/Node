import * as fs from "node:fs";

const fileName = "test.json";
const fileContent = { content: "My first json file" };

function convertedToJson(passingContent) {
  return JSON.stringify(passingContent);
}

function readingJsonFile() {
  const readingFile = fs.readFileSync(fileName, "utf-8");
  return JSON.parse(readingFile);
}

function changingJsonFileContent(content) {
  fs.writeFileSync(fileName, convertedToJson(content));
}

function updatedContent(userNewContent) {
  return { ...readingJsonFile(), ...userNewContent };
}

changingJsonFileContent(fileContent);

const userNewContent = { newContent: "Updating JSON File" };

changingJsonFileContent(updatedContent(userNewContent));

const deletingContent = readingJsonFile()

const a = delete deletingContent.content

changingJsonFileContent(deletingContent)