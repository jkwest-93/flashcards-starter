const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', function() {
  let deck, round, game;
    beforeEach(function () {
      game = new Game();
      cards = game.createCards()
      deck = new Deck(cards)
      round = new Round(deck)
    });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should have a current round that is initialized as null', function() {
    expect(game.currentRound).to.deep.equal(null)
  })

  it('should be able to create/put cards in a deck and start a new round', function() {
    game.start()

    expect(game.currentRound).to.deep.equal(
      {
        deck: cards,
        turns: 0,
        incorrectGuesses: []
      }
    )
    expect(game.currentRound.deck.length).to.deep.equal(30)
  })
})
