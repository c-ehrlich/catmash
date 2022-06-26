import _ from 'lodash';

const TOTAL_NUMBER_OF_CAT_PICS = 11091;

export function getTwoRandomNumbers(
  max: number = TOTAL_NUMBER_OF_CAT_PICS
): [number, number] {
  const firstNumber = _.random(1, max);
  let secondNumber = firstNumber;
  while (secondNumber === firstNumber) {
    secondNumber = _.random(1, max);
  }
  return [firstNumber, secondNumber];
}
