import React from 'react';

function Banner({ guessedCorrectly, currentNoOfGuesses, answer }) {
  if (guessedCorrectly) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{currentNoOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else if (currentNoOfGuesses >= 6) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
