import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div class='guess-results'>
      {guesses.map((guess, index) => (
        <p class='guess' key={index}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
