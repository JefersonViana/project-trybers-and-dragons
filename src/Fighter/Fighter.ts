import Energy from '../Energy';
import IAttack from './Attack';
import ILifeAndStrength from './LifeAndStrength';
import SimpleFighter from './SimpleFighter';

interface Fighter extends IAttack<Fighter | SimpleFighter>, ILifeAndStrength {
  defense:number,
  energy?:Energy,
  special?(enemy:Fighter):void,
  levelUp():void,
}

export default Fighter;