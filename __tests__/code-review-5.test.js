import  Planet from "./../src/calculator.js";

describe('Planet', () => {
  const age = new Planet(24)
 
  test('should generate current age on mercury', () => {
    expect(age.mercury).toEqual(99.54545454545455);
  });
  test('should generate current age venus', () => {
    expect(age.venus).toEqual(38.93333333333333);
  });
  test('should generate current age on earth', () => {
    expect(age.earth).toEqual(24);
  });
  test('should generate current age on mars', () => {
    expect(age.mars).toEqual(12.751091703056769);
  });
  test('should generate current age on jupiter', () => {
    expect(age.jupiter).toEqual(2.0216939764597277 );
  });
})

describe('expentancy', () => {
  const age = new Planet(24)
  age.expectancy();

  test('should generate how long you have left to live on Mercury by minusing expectancy from current age', () => {
    expect(age.mercury).toEqual(199.09090909090907);
  });
  test('should generate how long you have left to live on Venus by minusing expectancy from current age', () => {
    expect(age.venus).toEqual(77.86666666666667);
  });
  test('should generate how long you have left to live on Earth by minusing expectancy from current age', () => {
    expect(age.earth).toEqual(48);
  });
  test('should generate how long you have left to liv on Mars by minusing expectancy from current age', () => {
    expect(age.mars).toEqual(25.502183406113534);
  });
  test('should generate how long you have left to live on Jupiter by minusing expectancy from current age', () => {
    expect(age.jupiter).toEqual(4.0433879529194545);
  });
})