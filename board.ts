// TODO: Can only set a position if it is an empty string
import { Letters } from './letter.enum.ts';
import { BoardPosition } from './board-position.enum.ts';

export class Board {
  private _A1: Letters;
  private _A2: Letters;
  private _A3: Letters;
  private _B1: Letters;
  private _B2: Letters;
  private _B3: Letters;
  private _C1: Letters;
  private _C2: Letters;
  private _C3: Letters;

  constructor() {
    this._A1 = Letters.Empty;
    this._A2 = Letters.Empty;
    this._A3 = Letters.Empty;
    this._B1 = Letters.Empty;
    this._B2 = Letters.Empty;
    this._B3 = Letters.Empty;
    this._C1 = Letters.Empty;
    this._C2 = Letters.Empty;
    this._C3 = Letters.Empty;
  }

  // TODO: Finish display board function
  displayBoard(): string {
    const board = `
      ${this._A1} | ${this._A2} | ${this._A3}
      ------------------------------------
            |       |       
      ----------------------
            |       |       
    `;

    return board;
  }

  setPostion(position: BoardPosition, letter: Letters): void {
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

  get A1(): Letters {
    return this._A1;
  }

  set A1(letter: Letters) {   
    this._A1 = letter;
  }

  get A2(): Letters {
    return this._A2;
  }

  set A2(letter: Letters) {   
    this._A2 = letter;
  }

  get A3(): Letters {
    return this._A3;
  }

  set A3(letter: Letters) {   
    this._A3 = letter;
  }

  get B1(): Letters {
    return this._B1;
  }

  set B1(letter: Letters) {   
    this._B1 = letter;
  }

  get B2(): Letters {
    return this._B2;
  }

  set B2(letter: Letters) {   
    this._B2 = letter;
  }

  get B3(): Letters {
    return this._B3;
  }

  set B3(letter: Letters) {   
    this._B3 = letter;
  }

  get C1(): Letters {
    return this._C1;
  }

  set C1(letter: Letters) {   
    this._C1 = letter;
  }

  get C2(): Letters {
    return this._C2;
  }

  set C2(letter: Letters) {   
    this._C2 = letter;
  }

  get C3(): Letters {
    return this._C3;
  }

  set C3(letter: Letters) {   
    this._C3 = letter;
  } 
}