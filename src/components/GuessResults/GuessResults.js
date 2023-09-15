import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessedWords from '../GuessedWords';

const EmptyGuess = ({ guessIndex }) => {
  return new Array(5)
    .fill('5')
    .map((i, index) => (
      <span className='cell' key={`${guessIndex}-${index}`}></span>
    ));
};

const EmptyGuesses = ({ guessesLength, remainingGuesses }) => {
  return new Array(remainingGuesses).fill('').map((i, index) => {
    const guessIndex = index + guessesLength;
    return (
      <p className='guess' key={guessIndex}>
        <EmptyGuess guessIndex={guessIndex} />
      </p>
    );
  });
};

function GuessResults({ guesses, answer }) {
  const NUMBER_OF_REMAINING_GUESSSES = NUM_OF_GUESSES_ALLOWED - guesses.length;

  return (
    <div className='guess-results'>
      {guesses.length > 0 && <GuessedWords guesses={guesses} answer={answer} />}
      {!!NUMBER_OF_REMAINING_GUESSSES && (
        <EmptyGuesses
          guessesLength={guesses.length}
          remainingGuesses={NUMBER_OF_REMAINING_GUESSSES}
        />
      )}
    </div>
  );
}

export default GuessResults;
