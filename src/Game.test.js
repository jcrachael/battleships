import { Game } from "./Game";

it("game is an object", () => {
  let game = new Game();
  expect(typeof game).toBe("object");
});

it("game returns a winner", () => {
  let game = new Game();
  expect(game.winner).toBeDefined();
});
