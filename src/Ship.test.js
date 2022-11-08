/* eslint-disable no-undef */

import Ship from "./Ship";


it('A new ship is made with length 5', () => {
    const newShip = new Ship(5);
    expect(newShip.length).toBe(5);
});

it('A new ship has not been hit', () => {
    const newShip = new Ship(3);
    expect(newShip.timesHit).toBe(0);
});

it('A new ship has not been sunk', () => {
    const newShip = new Ship(5);
    expect(newShip.sunk).toBe(false);
});

it('A new ship with 0 params has length of undefined', () => {
    const newShip = new Ship();
    expect(newShip.length).toBe(undefined);
});

it('Creating a new Ship returns an object', () => {
    const newShip = new Ship(4);
    expect(typeof newShip).toBe('object');
});

it('Ship.hit() increases this object\'s timesHit', () => {
    const newShip = new Ship(5);
    newShip.hit();
    expect(newShip.timesHit).toBe(1);
});

it('Ship.isSunk() returns false if timesHit is less than length', () => {
    const newShip = new Ship(3);
    expect(newShip.isSunk()).toBe(false);
});

it('Ship.isSunk() is true when timesHit is equal to length', () => {
    const newShip = new Ship(3);
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.sunk = newShip.isSunk();
    expect(newShip.sunk).toBe(true);
});

it('gets a shipType of battleship for Ship of length 4', () => {
    const newShip = new Ship(4);
    expect(newShip.shipType()).toBe('battleship');
})