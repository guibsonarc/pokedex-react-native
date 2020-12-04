export default class PokemonTypesModel {
  doubleDamage: Array<string>;

  halfDamage: Array<string>;

  constructor(doubleDamage: Array<string>, halfDamage: Array<string>) {
    this.doubleDamage = doubleDamage;
    this.halfDamage = halfDamage;
  }
}
