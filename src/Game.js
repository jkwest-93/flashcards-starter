const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

class Game {
  constructor() {
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
      let card = prototypeQuestions[i];
      let currentCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
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
