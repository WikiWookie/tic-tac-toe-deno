import { assert, assertNotEquals, assertEquals } from "https://deno.land/std@v0.60.0/testing/asserts.ts";
import { Board } from './board.ts';
import { Letter } from './letter.enum.ts';

Deno.test("Board has method that shows current state of gameboard", () => {
  // Arrange
  const testGameBoardString = 
    `  X  |     |   \n` +
    '-----------------\n' +
    `     |     |   \n` +
    '-----------------\n' +
    `     |     |   `; 

  const newBoard = new Board();
  newBoard.A1 = Letter.X;
  // Act
  // Assert
  assertEquals(
    newBoard.displayBoard(), 
    testGameBoardString
  );
});

Deno.test("Board has method that checks for a winner", () => {
  // Arrange
  // Act
  // Assert
  assertEquals(
    true, false
  );
});

