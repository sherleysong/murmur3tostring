
import readline from "readline"
import ArrayBufferToString from "./index.js"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('input something : ', (string) => {
  console.log(`the result is :  ${ ArrayBufferToString(string) }`);
  rl.close();
});