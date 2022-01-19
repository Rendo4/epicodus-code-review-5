export default class Planet {
  constructor(age) {
  this.mercury = (age * 365) / 88,
  this.venus = (age * 365) / 225,
  this.earth = age ,
  this.mars = (age * 365) / 687,
  this.jupiter = (age * 365) / 4333
  }

  expectancy(){
    this.mercury = 298.6363636363636 - this.mercury
    this.venus = 116.8 - this.venus
    this.earth = 72 - this.earth
    this.mars = 38.2532751091703 - this.mars
    this.jupiter = 6.065081929379183 - this.jupiter
  }
}
