import { Planet } from "./../src/calculator.js";

describe('Planet', () => {
 
  test('should generate current age on mercury', () => {
    let array1 = [];
    let age = 24;
    currentAge(age, array1, Planet);
    expect(array1[0]).toEqual(99.54545454545455);
  });
  test('should generate current age venus', () => {
    let array1 = [];
    let age = 24;
    currentAge(age, array1, Planet);
    expect(array1[1]).toEqual(38.93333333333333);
  })
  test('should generate current age on earth', () => {
    let array1 = [];
    let age = 24;
    currentAge(age, array1, Planet);
    expect(array1[2]).toEqual(24);
  })
  test('should generate current age on mars', () => {
    let array1 = [];
    let age = 24;
    currentAge(age, array1, Planet);
    expect(array1[3]).toEqual(12.751091703056769);
  })
  test('should generate current age on jupiter', () => {
    let array1 = [];
    let age = 24;
    currentAge(age, array1, Planet);
    expect(array1[4]).toEqual(2.0216939764597277 );
  })
})