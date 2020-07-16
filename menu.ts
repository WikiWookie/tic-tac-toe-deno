import { TicTacToeGameSettings } from "./tictactoe-game-settings.ts";
import { Player } from "./player.ts";
import { Letter } from "./letter.enum.ts";
import { Utility } from "./utility.ts";

export class Menu {
  public gameSettings: TicTacToeGameSettings;

  constructor() {
    this.gameSettings = new TicTacToeGameSettings();
    this.displayMainScreen();
  }

  /*
  * Prompt for a response
  * https://www.danvega.dev/blog/2020/06/03/deno-stdin-stdout/
  */
  async prompt(message: string = "") {
    const buf = new Uint8Array(1024);
    await Deno.stdout.write(new TextEncoder().encode(message + "> "));
    const n = <number>await Deno.stdin.read(buf);
    return new TextDecoder().decode(buf.subarray(0, n)).trim();
  }

  async displayMainScreen() {
    console.clear();
    console.log('Welcome to Tic Tac Toe');
    console.log('1) Single Player');
    console.log('2) Multiplayer');
    console.log('3) About');
    console.log('4) Quit');
    this.processMainMenuPrompt( await this.prompt() );
  }

  processMainMenuPrompt(choice: string) {
    const validAnswers = ['1', '2', '3', '4'];

    if( !validAnswers.includes(choice) ) {
      console.log('Invalid input.  Please input 1 - 4');
    }
    
    switch (choice) {
      case '1':
        this.displaySinglePlayerScreen();
        break;

      case '2':
        break;

      case '3':
        break;

      case '4':
        this.quit();
        break;
    
      default:
        break;
    }
  }

  async displaySinglePlayerScreen() {
    console.clear();
    console.log('Tic Tac Toe - Single Player');
    console.log(`Enter 'b' to go back to the previous screen`);
    console.log('Choose a letter: X or O');
    this.processSinglePlayerLetterChoicePrompt( await this.prompt() );
    console.log('Choose which letter goes first');
    this.processSinglePlayerFirstLetterPrompt( await this.prompt() );
  }

  async processSinglePlayerLetterChoicePrompt(choice: string) {
    const validAnswers = ['X', 'O', 'b'];

    if( !validAnswers.includes(choice) ) {
      console.log(`Invalid input.  Please enter X or O.  Otherwise enter 'b' to go back`);
      await Utility.delay(3000);
      this.displaySinglePlayerScreen();
    }
    
    switch (choice) {
      case 'X':
        this.gameSettings.playerOne = new Player('PlayerOne', Letter.X);
        this.gameSettings.playerTwo = new Player('PlayerTwo', choice == Letter.X ? Letter.O : Letter.X);
        break;

      case 'O':
        this.gameSettings.playerOne = new Player('PlayerOne', Letter.O);
        this.gameSettings.playerTwo = new Player('PlayerTwo', choice == Letter.O ? Letter.X : Letter.O);
        break;

      case 'b':
        this.gameSettings = new TicTacToeGameSettings();
        this.displayMainScreen();
        break;
    
      default:
        break;
    }
  }

  async processSinglePlayerFirstLetterPrompt(choice: string) {
    const validAnswers = ['X', 'O', 'b'];

    if( !validAnswers.includes(choice) ) {
      console.log(`Invalid input.  Please enter X or O.  Otherwise enter 'b' to go back`);
      await Utility.delay(3000);
      this.displaySinglePlayerScreen();
    }
    
    switch (choice) {
      case 'X':
        this.gameSettings.firstLetter = Letter.X;
        // Start game here?
        break;

      case 'O':
        this.gameSettings.firstLetter = Letter.O;
        // Start game here?
        break;

      case 'b':
        this.gameSettings = new TicTacToeGameSettings();
        this.displayMainScreen();
        break;
    
      default:
        break;
    }
  }

  multiplayerScreen() {
    throw new Error('Not Yet Implemented');
  }

  aboutScreen() {
    throw new Error('Not Yet Implemented');
  }
  
  quit() {
    console.clear();
    Deno.exit();
  }
}