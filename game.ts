import { Player } from './player';
import { Board } from './board.ts';

class TicTacToe {
  private _playerOne: Player;
  private _playerTwo: Player;
  private goesFirst: Player;
  private board: Board;

  constructor() {

  }

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