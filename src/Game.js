const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

class Game {
  constructor(round) {
    this.currentRound = null;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createCards() {
    const newCards = []
    for (let i = 0; i < prototypeQuestions.length; i++) {
      let currentCard = new Card(prototypeQuestions[i]);
      newCards.push(currentCard)
    }
    return newCards
  }

  start() {
    const deck = new Deck(this.createCards())
    this.currentRound = new Round(deck)

    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
