import React from 'react';
import GuessInput from '../GuessInput';
import Guess from '../Guess';
import Banner from '../Banner';

import { sample } from '../../utils';
import { range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const [guessedCorrectly, setGuessedCorrectly] =
    React.useState(false);
  const [currentNoOfGuesses, setCurrentNoOfGuesses] =
    React.useState(0);

  function handleSubmitGuess(guess) {
    setPreviousGuesses([...previousGuesses, guess]);
  }

  function generateGuessGrid(size) {
    return range(size).map((rowIndex) => {
      return (
        <Guess
          key={rowIndex}
          rowIndex={rowIndex}
          previousGuesses={previousGuesses}
          answer={answer}
        />
      );
    });
  }

  return (
    <>
      <div className="guess-results">
        {generateGuessGrid(NUM_OF_GUESSES_ALLOWED)}
      </div>
      <Banner
        guessedCorrectly={guessedCorrectly}
        currentNoOfGuesses={currentNoOfGuesses}
        answer={answer}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        answer={answer}
        guessedCorrectly={guessedCorrectly}
        setGuessedCorrectly={setGuessedCorrectly}
        currentNoOfGuesses={currentNoOfGuesses}
        setCurrentNoOfGuesses={setCurrentNoOfGuesses}
      />
    </>
  );
}

export default Game;
