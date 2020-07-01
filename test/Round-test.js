const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', function() {
  let card1, card2, card3, deck, round;
    beforeEach(function () {
      card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      deck = new Deck([card1, card2, card3]);
      round = new Round(deck);
    });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Deck', function() {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should have a deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it('should have a current card that is the first card in the deck at the start of the round', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1)
  })

  it('should have a property turns that starts at 0', function() {
    expect(round.turns).to.deep.equal(0)
  })

  it('should store incorrectGuesses which start as an empty array', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should be able to take a turn an update the turn count, evaluate the guess, give feedback, and store the incorrect guesses', function() {
    expect(round.takeTurn('sea otter')).to.deep.equal('correct!')

    expect(round.takeTurn('spleen')).to.deep.equal('incorrect!')

    expect(round.turns).to.deep.equal(2)

    expect(round.incorrectGuesses).to.deep.equal([14])

    expect(round.returnCurrentCard()).to.deep.equal({
      id: 12,
      question: 'What is Travis\'s favorite stress reliever?',
      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      correctAnswer: 'playing with bubble wrap'
    })

    expect(round.calculatePercentCorrect()).to.deep.equal(50)
  })
})
