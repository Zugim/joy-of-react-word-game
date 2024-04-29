import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({
  handleSubmitGuess,
  guessedCorrectly,
  currentNoOfGuesses,
}) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmitGuess(guess);

        setGuess("");
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
          guessedCorrectly || currentNoOfGuesses >= NUM_OF_GUESSES_ALLOWED
            ? true
            : false
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
