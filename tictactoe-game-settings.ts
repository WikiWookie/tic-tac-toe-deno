import { Player } from "./player.ts";
import { Letter } from "./letter.enum.ts";

export class TicTacToeGameSettings {
  playerOne: Player | null;
  playerTwo: Player | null;
  firstLetter: Letter;

  constructor() {
    this.playerOne = null;
    this.playerTwo = null;
    this.firstLetter = Letter.Empty;
  }
}