export const Planet = {
  mercury: 88,
  venus: 225,
  earth: 365,
  mars: 687,
  jupiter: 4333
};


export let array1 = [];

export function currentAge(age, array1, Planet) {
  for (const property in Planet) {
    array1.push((age * 365) / Planet[property]);
  }
  return array1;
}

export const Life = {
  mercury: 298.6363636363636,
  venus: 116.8,
  earth: 72,
  mars: 38.2532751091703,
  jupiter: 6.065081929379183
};

export let planets = []

export function expectancy(Life, array1) {
  let planet1 = Life["mercury"] - array1[0];
  let planet2 = Life["venus"] - array1[1];
  let planet3 = Life["earth"] - array1[2];
  let planet4 = Life["mars"] - array1[3];
  let planet5 = Life["jupiter"] - array1[4];
  planets.push(planet1, planet2, planet3, planet4, planet5)
  return planets
} 