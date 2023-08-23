import Battle from './Battle';
import Fighter from '../Fighter/index';
import SimpleFighter from '../Fighter/SimpleFighter';

class PVE extends Battle {
  private _player: Fighter;
  private _environments: (Fighter | SimpleFighter)[];

  constructor(
    play: Fighter,
    environments: (Fighter | SimpleFighter)[],
  ) {
    super(play);
    this._player = play;
    this._environments = environments;
  }

  fight(): number {
    let count = 0;
    const especial = [4, 7, 9, 13];
    while (
      this._player.lifePoints > 0 && (
        this._environments.some((environment) => environment.lifePoints > 0)
      )
    ) {
      this._environments.forEach((environment) => {
        this._player.attack(environment);
      });
      this._environments.forEach((e) => e.attack(this._player));
      count += 1;
      if (especial.includes(count)) {
        this._player.levelUp();
      }
    }
    return super.fight();
  }
}

export default PVE;