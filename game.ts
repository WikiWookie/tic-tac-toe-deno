import { Player } from './player';

class TicTacToe {
  private _playerOne: Player;
  private _playerTwo: Player;
  private board; // TODO: Type
  private firstLetter;

  get playerOne(): Player {
    return this._playerOne;
  }

  set playerOne(newPlayer: Player) {   
    this._playerOne = newPlayer;
  }
  
  get playerTwo(): Player {
    return this._playerTwo;
  }

  set playerTwo(newPlayer: Player) {   
    this._playerTwo = newPlayer;
  }
}