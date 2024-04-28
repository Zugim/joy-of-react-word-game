import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ rowIndex, previousGuesses, answer }) {
  const guessResult = checkGuess(previousGuesses[rowIndex], answer);

  function generateGuessRow(size) {
    return range(size).map((cellIndex) => {
      if (previousGuesses[rowIndex]) {
        return (
          <span
            key={cellIndex}
            className={`cell ${guessResult[cellIndex].status}`}
          >
            {previousGuesses[rowIndex][cellIndex]}
          </span>
        );
      } else {
        return <span key={cellIndex} className="cell"></span>;
      }
    });
  }

  return <p className="guess">{generateGuessRow(5)}</p>;
}

export default Guess;
