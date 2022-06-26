import _ from 'lodash';

export function getIdsForVote(
  // TODO put this in env (it's the number of cats in our database)
  max: number = 11091
): [number, number] {
  const firstNumber = _.random(1, max);
  let secondNumber = firstNumber;
  while (secondNumber === firstNumber) {
    secondNumber = _.random(1, max);
  }
  return [firstNumber, secondNumber];
}
