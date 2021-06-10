
import readline from "readline"
import ArrayBufferToString from "./index.js"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入字符串：', (string) => {
  console.log(`result： ${ ArrayBufferToString(string) }`);
  rl.close();
});