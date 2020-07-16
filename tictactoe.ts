import { Player } from './player.ts';
import { Board } from './board.ts';
import { TicTacToeGameSettings } from './tictactoe-game-settings.ts';
import { Letter } from './letter.enum.ts';

class TicTacToe {
  private _playerOne: Player | null;
  private _playerTwo: Player | null;
  private _firstLetter: Letter;
  public board: Board;

  constructor(settings: TicTacToeGameSettings) {
    this._playerOne = settings.playerOne;
    this._playerTwo = settings.playerTwo;
    this._firstLetter = settings.firstLetter;
    this.board = new Board();
  }

  get playerOne(): Player | null {
    return this._playerOne;
  }

  set playerOne(newPlayer: Player | null) {   
    this._playerOne = newPlayer;
  }
  
  get playerTwo(): Player | null {
    return this._playerTwo;
  }

  set playerTwo(newPlayer: Player | null) {   
    this._playerTwo = newPlayer;
  }

  get firstLetter(): Letter {
    return this._firstLetter;
  }

  set firstLetter(newPlayer: Letter) {   
    this._firstLetter = newPlayer;
  }
}