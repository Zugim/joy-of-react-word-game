import React from 'react';

function GuessInput({
  handleSubmitGuess,
  answer,
  guessedCorrectly,
  setGuessedCorrectly,
  currentNoOfGuesses,
  setCurrentNoOfGuesses,
}) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmitGuess(guess);

        if (guess === answer) {
          setGuessedCorrectly(true);
        }

        setCurrentNoOfGuesses(currentNoOfGuesses + 1);

        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5,5}"
        title="5 letter word"
        disabled={
          guessedCorrectly || currentNoOfGuesses >= 6 ? true : false
        }
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
