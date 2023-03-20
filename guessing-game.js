
function guessingGame() {
    const solution = Math.floor(Math.random() * 100);
    let count = 0
    let complete = false;
    return function game(num) {
        if (complete) return "The game is over, you already won!"
        count ++;
        if(num === solution){
            complete = true;
            return `You win! You found ${solution} in ${count} guesses.`
        }else if(num > solution){
            return `${num} is too high!`
        }else{
            return `${num} is too low!`
        }
    }
}

module.exports = { guessingGame };
