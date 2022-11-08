/* eslint-disable no-undef */

import Ship from "./Ship";


it('A new carrier is made with length 5', () => {
    const newShip = new Ship('carrier');
    expect(newShip.length).toBe(5);
});

it('A new battleship is made with length 4', () => {
    const newShip = new Ship('battleship');
    expect(newShip.length).toBe(4);
});

it('A new destroyer is made with length 3', () => {
    const newShip = new Ship('destroyer');
    expect(newShip.length).toBe(3);
});

it('A new submarine is made with length 3', () => {
    const newShip = new Ship('submarine');
    expect(newShip.length).toBe(3);
});

it('A new patrol boat is made with length 2', () => {
    const newShip = new Ship('patrol');
    expect(newShip.length).toBe(2);
});

it('A new ship has not been hit', () => {
    const newShip = new Ship('carrier');
    expect(newShip.timesHit).toBe(0);
});

it('A new ship has not been sunk', () => {
    const newShip = new Ship('carrier');
    expect(newShip.sunk).toBe(false);
});


it('Creating a new Ship returns an object', () => {
    const newShip = new Ship('carrier');
    expect(typeof newShip).toBe('object');
});

it('Ship.hit() increases this object\'s timesHit', () => {
    const newShip = new Ship('carrier');
    newShip.hit();
    expect(newShip.timesHit).toBe(1);
});

it('Ship.isSunk() returns false if timesHit is less than length', () => {
    const newShip = new Ship('carrier');
    expect(newShip.isSunk()).toBe(false);
});

it('Ship.isSunk() is true when timesHit is equal to length', () => {
    const newShip = new Ship('submarine');
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.sunk = newShip.isSunk();
    expect(newShip.sunk).toBe(true);
});

it('gets a shipType of battleship for Ship of length 4', () => {
    const newShip = new Ship('battleship');
    expect(newShip.length).toEqual(4);
})