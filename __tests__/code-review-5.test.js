import { Planet, currentAge, expectancy, Life, planets } from "./../src/calculator.js";

describe('Planet', () => {
  let array1 = [];
  let age = 24;
 
  test('should generate current age on mercury', () => {
    currentAge(age, array1, Planet);
    expect(array1[0]).toEqual(99.54545454545455);
  });
  test('should generate current age venus', () => {
    currentAge(age, array1, Planet);
    expect(array1[1]).toEqual(38.93333333333333);
  });
  test('should generate current age on earth', () => {
    currentAge(age, array1, Planet);
    expect(array1[2]).toEqual(24);
  });
  test('should generate current age on mars', () => {
    currentAge(age, array1, Planet);
    expect(array1[3]).toEqual(12.751091703056769);
  });
  test('should generate current age on jupiter', () => {
    currentAge(age, array1, Planet);
    expect(array1[4]).toEqual(2.0216939764597277 );
  });
})

describe('expentancy', () => {
  let array1 = [];
  let age = 24;

  test('should generate how long you have left to live on Mercury by minusing expectancy from current age', () => {
    currentAge(age, array1, Planet);
    expectancy(Life, array1);
    expect(planets[0]).toEqual(199.09090909090907);
  });
  test('should generate how long you have left to live on Venus by minusing expectancy from current age', () => {
    currentAge(age, array1, Planet);
    expectancy(Life, array1);
    expect(planets[1]).toEqual(77.86666666666667);
  });
  test('should generate how long you have left to live on Earth by minusing expectancy from current age', () => {
    currentAge(age, array1, Planet);
    expectancy(Life, array1);
    expect(planets[2]).toEqual(48);
  });
  test('should generate how long you have left to liv on Mars by minusing expectancy from current age', () => {
    currentAge(age, array1, Planet);
    expectancy(Life, array1);
    expect(planets[3]).toEqual(25.502183406113534);
  });
  test('should generate how long you have left to live on Jupiter by minusing expectancy from current age', () => {
    currentAge(age, array1, Planet);
    expectancy(Life, array1);
    expect(planets[4]).toEqual(4.0433879529194545);
  });
})