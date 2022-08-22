const numberGuesser = require("./numberGuesser.js");
const terminalNumberGuesser = require("./terminalNumberGuesser.js");

let game = new terminalNumberGuesser.TerminalNumberGuesser(new numberGuesser.NumberGuesser(100));

game.play();
