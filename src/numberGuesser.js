/**
 * A number comparison result enumeration.
 */
class Comparison
{
    static get lower() { return -1; }
    static get equal() { return 0; }
    static get higher() { return 1; }
}
exports.Comparison = Comparison;

exports.NumberGuesser = class NumberGuesser
{
    /**
     * Creates a new number guesser game.
     * @param {Integer} max The upper floor of the random number to guess.
     */
    constructor(max)
    {
        this.number = Math.floor(Math.random() * max);
        this._guesses = 0;
        this._found = false;
    }

    /**
     * 
     * @param {Integer} number The number to guess.
     * @returns A Comparison result.
     */
    guess(number)
    {
        const comparison = Math.sign(number - this.number);
        this._guesses++;

        if (comparison == Comparison.equal)
            this._found = true;

        return comparison;
    }

    /**
     * Whether the number has been found.
     */
    get found() { return this._found; }

    /**
     * The number of guesses made up to this point.
     */
    get guesses() { return this._guesses; }
}
