import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let name = await userInput.question('wat is je naam');

let age = await userInput.question('wat is je leeftijd');

let favoritegame = await userInput.question('wat is je lievelingsgame?');

console.log ('hallo ik ben' + name +' ik ben' + age + 'jaar oud en mijn lievelingsgame is' + favoritegame);

process.exit();