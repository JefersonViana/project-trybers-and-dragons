import Battle from './Battle';
import Character from '../Character';
import Fighter from '../Fighter/index';

class PVP extends Battle {
  private _player1: Character | Fighter;
  private _player2: Character | Fighter;

  constructor(
    play1: Character | Fighter,
    play2: Character | Fighter,
  ) {
    super(play1);
    this._player1 = play1;
    this._player2 = play2;
  }

  fight(): number {
    while (
      this._player1.lifePoints > 0 && this._player2.lifePoints > 0
    ) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return super.fight();
  }
}

export default PVP;