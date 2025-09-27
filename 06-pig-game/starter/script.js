'use strict';

console.log('Pig Game Ready!');

// Game State Variables
let scores, currentScore, activePlayer, playing;

// Select Player 1
const playerr0El = document.querySelector('.player--0');

// Select Player 2
const playerr1El = document.querySelector('.player--1');

// Select Score 0 Element
const score0El = document.querySelector('#score--0');

// Select Score 1 Element
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');

// Game Initialization Function
const init = function () {
  // Starting Scores
  scores = [0, 0];

  // Current Score to 0
  currentScore = 0;

  // Active Player to 0 (Player 1)
  activePlayer = 0;
  playing = true;

  // Reset All the Display
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
};

init();

btnRollEl.addEventListener('click', function () {
  if (playing) {
    // Dice Logic
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Rolling a 1
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
  }
});
