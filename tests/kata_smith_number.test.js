const smithNumber = require('../kata_smith_number.js');
const sumOfAllPrimeFactor = require('../kata_smith_number.js');

test('is not a smith number', () => {
  expect(smithNumber(0)).toBe(false);
  expect(smithNumber(1)).toBe(false);
  //expect(smithNumber(8)).toBe(false);
});

test('is a smith number', () => {
    expect(smithNumber(4)).toBe(true);
    expect(smithNumber(22)).toBe(true);
  });

test('sum of all prime factor', () => {
    expect(sumOfAllPrimeFactor(0)).toBe(0);
})