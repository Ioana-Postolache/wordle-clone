import React from 'react';

function GuessInput({ submitGuess, remainingGuesses }) {
  const [guess, setGuess] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    submitGuess(guess);
    setGuess('');
  };
  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={remainingGuesses === 0}
        id='guess-input'
        type='text'
        pattern='[A-Z]{5,5}'
        name='guess'
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
