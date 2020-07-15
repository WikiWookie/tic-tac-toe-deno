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

// Deno.test("Test Assert Not Equals", () => {
//   assertNotEquals(1, 2);
//   assertNotEquals("Hello", "World");
//   assertNotEquals(true, false);
//   assertNotEquals(undefined, "");
//   assertNotEquals(new Date(), Date.now());
//   assertNotEquals(new RegExp("abc"), new RegExp("def"));
// });

// Deno.test("example", function (): void {
//   assertEquals("world", "world");
//   assertEquals({ hello: "world" }, { hello: "world" });
// });

// Deno.test({
//   name: "testing example",
//   fn(): void {
//     assertEquals("world", "world");
//     assertEquals({ hello: "world" }, { hello: "world" });
//   },
// });