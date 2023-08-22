import Energy from '../Energy';
import IAttack from './Attack';
import ILifeAndStrength from './LifeAndStrength';

interface Fighter extends IAttack<Fighter>, ILifeAndStrength {
  defense:number,
  energy?:Energy,
  special?(enemy:Fighter):void,
  levelUp():void,
}

export default Fighter;