import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Necromancer extends Archetypes {
  private _habilidade:EnergyType;
  static countInstances = 0;

  constructor(name:string) {
    super(name);
    this._habilidade = 'mana';
    Necromancer.countInstances += 1;
  }

  get habilidade():string {
    return this._habilidade;
  }

  get energyType():EnergyType {
    return this._habilidade;
  }

  static createdArchetypeInstances():number {
    return this.countInstances;
  }
}

export default Necromancer;