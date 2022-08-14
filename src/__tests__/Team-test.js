import { Team } from "../classes/Team";
import { Player } from "../classes/Player";
// Testing the Team class using Player objects

var testTeam = new Team();

testTeam.team = [
  new Player("player1", 3, 5, 6),
  new Player("player2", 5, 6, 7),
  new Player("player3", 4, 7, 5),
];

test("tests fitness function", () => {
  expect(testTeam.fitness()).toBe(4);
});

test("tests attack function", () => {
  expect(testTeam.attack()).toBe(6);
});

test("tests defence function", () => {
  expect(testTeam.defense()).toBe(6);
});
