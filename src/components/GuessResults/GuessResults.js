import React from 'react';

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

function GuessResults({ guesses, answer, remainingGuesses }) {
  return (
    <div className='guess-results'>
      {guesses.length > 0 && <GuessedWords guesses={guesses} answer={answer} />}
      {!!remainingGuesses && (
        <EmptyGuesses
          guessesLength={guesses.length}
          remainingGuesses={remainingGuesses}
        />
      )}
    </div>
  );
}

export default GuessResults;
