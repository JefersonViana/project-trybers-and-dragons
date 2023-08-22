import IAttack from './Attack';
import ILifeAndStrength from './LifeAndStrength';

interface SimpleFighter extends IAttack<SimpleFighter>, ILifeAndStrength {}

export default SimpleFighter;