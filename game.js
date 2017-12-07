var inquirer = require("inquirer");
var Word = require("./word.js");

var guessesLeft;

var wordArray = ["fernando", "alexis", "fuentes"];

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var currentWord = new Word(randomWord);

console.log(randomWord);

console.log("=====================================");
console.log("WECOME TO THE Node Man! Nope Edition!");
console.log("=====================================");
console.log("Guess this word: ", currentWord.display());


var questionsArr = [{
  name: "guess",
  type: "input",
  message: "guess a letter!"
}];

inquirer.prompt(questionsArr).then(answers => {

});