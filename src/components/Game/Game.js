import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { getGuessResults } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const SuccessBanner = ({ noOfGuesses }) => {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${noOfGuesses} guesses`}</strong>.
      </p>
    </div>
  );
};

const FailBanner = ({ answer }) => {
  return (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
};

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGuessCorrect, setIsGuessCorrect] = React.useState(false);

  const submitGuess = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);

    if (getGuessResults(guess, answer)) {
      setIsGuessCorrect(true);
    }
  };
  const remainingGuesses = NUM_OF_GUESSES_ALLOWED - guesses.length;

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        remainingGuesses={remainingGuesses}
      />
      <GuessInput
        submitGuess={submitGuess}
        remainingGuesses={remainingGuesses}
      />
      {isGuessCorrect && <SuccessBanner noOfGuesses={guesses.length} />}
      {remainingGuesses === 0 && !isGuessCorrect && (
        <FailBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
