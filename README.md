# JavaScript FlashCards
2005 Front End- Mod 2, Solo Project 1

## Abstract
For this project, we were asked to build a flashcard game that plays through the command line. I utilized TDD to drive my code and gained a better appreciation for how writing tests guides stronger implementation code.

## Playing the Game
When the game is running, players receive one question at a time and can use the arrow-keys or type in 1, 2, or 3 to select the correct answer. Players use the `Enter` key to submit their answer and move to the next turn. After each guess, a message returns letting the player know if they got the question correct or incorrect.
![](jkw-flashcards-first3.gif)

## Install/Setup

Clone down the repo (found here: https://github.com/jkwest-93/flashcards-starter.git).

```bash
git clone [git@github.com:jkwest-93/flashcards-starter.git] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and run `node index.js` from the root directory & it should result in the following message being displayed in your terminal:

```bash
Node server running on port 3000
Welcome to FlashCards! You are playing with 30 cards.
-----------------------------------------------------------------------
```
