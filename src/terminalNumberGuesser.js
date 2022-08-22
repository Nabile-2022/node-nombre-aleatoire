const numberGuesser = require("./numberGuesser.js");
const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

exports.TerminalNumberGuesser = class TerminalNumberGuesser
{
    constructor(numberGuesser)
    {
        this.numberGuesser = numberGuesser;
    }

    play()
    {
        readline.question("Entrez le nombre: ", guess =>
        {
            switch (this.numberGuesser.guess(Number.parseInt(guess)))
            {
                case numberGuesser.Comparison.higher:
                    console.log("Le nombre est plus petit.");
                    break;
                case numberGuesser.Comparison.lower:
                    console.log("Le nombre est plus grand.");
                    break;
                case numberGuesser.Comparison.equal:
                    console.log(`Vous avez trouvé le nombre en ${this.numberGuesser.guesses} coups !`);
                    break;
            }

            if (!this.numberGuesser.found)
                this.play();
        });
    }
}
