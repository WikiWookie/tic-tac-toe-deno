import { assert } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Hello Test", () => {
  assert("Hello");
});

// import { assertNotEquals, assertEquals } from "https://deno.land/std/testing/asserts.ts";

// import { Board } from './board.ts';

// Deno.test("Board has method to show current state of gameboard", () => {
//   // if (!Board) {
//   //   throw Error("missing module");
//   // }

//   // Arrange
//   const newBoard = new Board();
//   // Act
//   // Assert

//   assertNotEquals(true, undefined);
// });

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