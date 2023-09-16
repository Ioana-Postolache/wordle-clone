import React from 'react';
import { checkGuess } from '../../game-helpers';

function GuessedWords({ guesses, answer }) {
  return guesses.map((guess, index) => {
    const guessResultsIndex = index;
    const isGuessCorrect = checkGuess(guess, answer);

    return (
      <p className='guess' key={index}>
        {[...guess].map((letter, index) => {
          const className = `cell ${isGuessCorrect[index].status}`;
          return (
            <span key={`${guessResultsIndex}-${index}`} className={className}>
              {letter}
            </span>
          );
        })}
      </p>
    );
  });
}

export default GuessedWords;
