export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = 'correct';
    } else if (answerChars.includes(guessChar)) {
      status = 'misplaced';
    } else {
      status = 'incorrect';
    }
    return {
      letter: guessChar,
      status,
    };
  });
}

export function getGuessResults(guess, answer) {
  if (!guess) {
    return false;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');
  let correct = true;

  guessChars.forEach((guessChar, index) => {
    const answerChar = answerChars[index];

    if (guessChar !== answerChar) {
      correct = false;
    }
  });
  return correct;
}
