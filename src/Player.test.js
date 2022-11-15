import { Player, AiPlayer } from "./Player";

it("New Player returns an object", () => {
  const player = new Player();
  expect(typeof player).toBe("object");
});

it("Player returns name property", () => {
  const name = "Rachael";
  const player = new Player(name);
  expect(player.name).toBe("Rachael");
});

it("AiPlayer is an object", () => {
  expect(typeof AiPlayer).toBe("object");
});

it("AiPlayer has a name of Jasper", () => {
  expect(AiPlayer.name).toBe("Jasper");
});

it("AiPlayer has a method randomCoords", () => {
  expect(AiPlayer.randomCoords()).toBeDefined();
});

it("AiPlayer.randomCoords() returns an array of length 2", () => {
  expect(AiPlayer.randomCoords()).toHaveLength(2);
});

it("Player object has method randomTurn()", () => {
  const name = "George";
  const player = new Player(name);
  expect(player.randomTurn).toBeDefined();
});

it("Player object has a property of usedCoords", () => {
  const name = "Mark";
  const player = new Player(name);
  expect(player.usedCoords).toBeDefined();
});
