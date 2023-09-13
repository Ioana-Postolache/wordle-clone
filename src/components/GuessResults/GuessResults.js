import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

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

const GuessedWords = ({ guesses }) => {
  return guesses.map((guess, index) => {
    const guessResultsIndex = index;
    return (
      <p className='guess' key={index}>
        {[...guess].map((letter, index) => (
          <span className='cell' key={`${guessResultsIndex}-${index}`}>
            {letter}
          </span>
        ))}
      </p>
    );
  });
};

function GuessResults({ guesses }) {
  const NUMBER_OF_REMAINING_GUESSSES = NUM_OF_GUESSES_ALLOWED - guesses.length;

  return (
    <div className='guess-results'>
      {guesses.length > 0 && <GuessedWords guesses={guesses} />}
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
