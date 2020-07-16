// TODO: Can only set a position if it is an empty string
import { Letter } from './letter.enum.ts';
import { BoardPosition } from './board-position.enum.ts';

export class Board {
  private _A1: Letter;
  private _A2: Letter;
  private _A3: Letter;
  private _B1: Letter;
  private _B2: Letter;
  private _B3: Letter;
  private _C1: Letter;
  private _C2: Letter;
  private _C3: Letter;

  constructor() {
    this._A1 = Letter.Empty;
    this._A2 = Letter.Empty;
    this._A3 = Letter.Empty;
    this._B1 = Letter.Empty;
    this._B2 = Letter.Empty;
    this._B3 = Letter.Empty;
    this._C1 = Letter.Empty;
    this._C2 = Letter.Empty;
    this._C3 = Letter.Empty;
  }

  displayBoard(): string {
    const board = 
      `  ${this._A1}  |  ${this._A2}  |  ${this._A3}\n` +
      '-----------------\n' +
      `  ${this._B1}  |  ${this._B2}  |  ${this._B3}\n` +
      '-----------------\n' +
      `  ${this._C1}  |  ${this._C2}  |  ${this._C3}`; 
    
    return board;
  }

  letterIsWinner(letter: Letter): boolean {
    // Check A Column
    if (
      this._A1 === letter &&
      this._A2 === letter &&
      this._A3 === letter 
    ) return true;

    // Check B Column
    if (
      this._B1 === letter &&
      this._B2 === letter &&
      this._B3 === letter 
    ) return true;

    // Check C Column
    if (
      this._C1 === letter &&
      this._C2 === letter &&
      this._C3 === letter 
    ) return true;

    // Check 1 Row
    if (
      this._A1 === letter &&
      this._B1 === letter &&
      this._C1 === letter 
    ) return true;

    // Check 2 Row
    if (
      this._A2 === letter &&
      this._B2 === letter &&
      this._C2 === letter 
    ) return true;
    
    // Check 3 Row
    if (
      this._A3 === letter &&
      this._B3 === letter &&
      this._C3 === letter 
    ) return true;

    // Check top left to bot right
    if (
      this._A1 === letter &&
      this._B2 === letter &&
      this._C3 === letter 
    ) return true;

    // Check top right to bottom left
    if (
      this._A3 === letter &&
      this._B2 === letter &&
      this._C1 === letter 
    ) return true;

    return false;
  }


  setPostion(position: BoardPosition, letter: Letter): void {
    // TODO: Maybe do position check here, if position is already a letter
    switch (position) {
      case 'A1':
        this.A1 = letter;
        break;

      case 'A2':
        this.A2 = letter;
        break;

      case 'A3':
        this.A3 = letter;
        break;

      case 'B1':
        this.B1 = letter;
        break;

      case 'B2':
        this.B2 = letter;
        break;

      case 'B3':
        this.B3 = letter;
        break;

      case 'C1':
        this.C1 = letter;
        break;

      case 'C2':
        this.C2 = letter;
        break;

      case 'C3':
        this.C3 = letter;
        break;
    
      default:
        break;
    }
  }

  /**
   * Getters/Setters For Board Positions 
   */

  get A1(): Letter {
    return this._A1;
  }

  set A1(letter: Letter) {   
    this._A1 = letter;
  }

  get A2(): Letter {
    return this._A2;
  }

  set A2(letter: Letter) {   
    this._A2 = letter;
  }

  get A3(): Letter {
    return this._A3;
  }

  set A3(letter: Letter) {   
    this._A3 = letter;
  }

  get B1(): Letter {
    return this._B1;
  }

  set B1(letter: Letter) {   
    this._B1 = letter;
  }

  get B2(): Letter {
    return this._B2;
  }

  set B2(letter: Letter) {   
    this._B2 = letter;
  }

  get B3(): Letter {
    return this._B3;
  }

  set B3(letter: Letter) {   
    this._B3 = letter;
  }

  get C1(): Letter {
    return this._C1;
  }

  set C1(letter: Letter) {   
    this._C1 = letter;
  }

  get C2(): Letter {
    return this._C2;
  }

  set C2(letter: Letter) {   
    this._C2 = letter;
  }

  get C3(): Letter {
    return this._C3;
  }

  set C3(letter: Letter) {   
    this._C3 = letter;
  } 
}