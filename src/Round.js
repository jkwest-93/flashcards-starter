const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck.cards,
    this.turns = 0,
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.returnCurrentCard())

    if(newTurn.giveFeedback() === 'correct!') {
      this.deck.splice(0, 1)
      this.turns ++;
    } else {
      this.incorrectGuesses.push(newTurn.returnCard().id)
      this.deck.push(this.deck.shift())
      this.turns ++;
    }
    return newTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect().toFixed(2)}% of the questions correctly!`)
  }
}

module.exports = Round
