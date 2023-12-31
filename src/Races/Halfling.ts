import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.countInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get name():string {
    return this.name;
  }

  get dexterity():number {
    return this.dexterity;
  }

  static createdRacesInstances():number {
    return this.countInstances;
  }
}

export default Halfling;
