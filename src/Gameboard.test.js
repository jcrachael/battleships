

import Gameboard from "./Gameboard";

it('A new Gameboard returns an object', () => {
    const newBoard = new Gameboard();
    expect(typeof newBoard).toBe('object');
})

it('A new Gameboard returns a 10x10 array as its board', () => {
    const newBoard = new Gameboard();
    expect(newBoard.board).toEqual([[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]);
});

it('placeShip returns error if shipType not defined', () => {
    const newBoard = new Gameboard();
    let shipType;
    const coords = [0,2];
    const orientation = 'horizontal';
    expect(newBoard.place(shipType, coords, orientation)).toBe('Error: ship type is not defined');
});

it('placeShip returns error if coords not defined', () => {
    const newBoard = new Gameboard();
    let shipType = 'battleship';
    let coords;
    const orientation = 'horizontal';
    expect(newBoard.place(shipType, coords, orientation)).toBe('Error: coords are not defined');
});

it('placeShip returns error if orientation not defined', () => {
    const newBoard = new Gameboard();
    const shipType = 'carrier';
    const coords = [0,2];
    let orientation;
    expect(newBoard.place(shipType, coords, orientation)).toBe('Error: orientation is not defined');
});

it('placeShip returns correct shipCoords for horizontal placement', () => {
    const newBoard = new Gameboard();
    const shipType = 'carrier';
    const coords = [0,2];
    const orientation = 'horizontal';
    expect(newBoard.place(shipType, coords, orientation)).toEqual(
        expect.arrayContaining([expect.arrayContaining([expect.objectContaining({"length": 5, "sunk": false, "timesHit": 0})])])
    );
});

it('placeShip returns correct shipCoords for vertical placement', () => {
    const newBoard = new Gameboard();
    const shipType = 'submarine';
    const coords = [3,4];
    const orientation = 'vertical';
    expect(newBoard.place(shipType, coords, orientation)).toEqual(
        expect.arrayContaining(
            [expect.arrayContaining(
                [expect.objectContaining(
                    {"length": 3, "sunk": false, "timesHit": 0}
                )]
            )]
        )
     );
});

it('board.receiveAttack records a Hit when square with boat is hit', () => {
    const newBoard = new Gameboard();
    const shipType = 'carrier';
    const coords = [0,2];
    const orientation = 'horizontal';
    newBoard.place(shipType, coords, orientation);
    expect(newBoard.receiveAttack(coords).result).toBe('Direct hit!');
});

it('board.receiveAttack records a Miss when no ship is it', () => {
    const newBoard = new Gameboard();
    const shipType = 'carrier';
    const coords = [0,2];
    const orientation = 'horizontal';
    newBoard.place(shipType, coords, orientation);
    expect(newBoard.receiveAttack([0,1]).result).toBe('Miss!');
});

it('board.receiveAttack throws an error if square already been shot at', () => {
    const newBoard = new Gameboard();
    const shipType = 'carrier';
    const coords = [0,2];
    const orientation = 'horizontal';
    newBoard.place(shipType, coords, orientation);
    newBoard.receiveAttack([0,1]);
    expect(newBoard.receiveAttack([0,1]).result).toBe("You've already fired here!");
});

it('board.receiveAttack tells you when a ship has sunk', () => {
    const newBoard = new Gameboard();
    const shipType = 'carrier';
    const coords = [0,2];
    const orientation = 'horizontal';
    newBoard.place(shipType, coords, orientation);
    newBoard.receiveAttack([0,2]);
    newBoard.receiveAttack([0,3]);
    newBoard.receiveAttack([0,4]);
    newBoard.receiveAttack([0,5]);
    expect(newBoard.receiveAttack([0,6]).result).toBe('Direct hit! You sunk my carrier');
});

it('board tracks how many of its ships have been sunk', () => {
    const newBoard = new Gameboard();
    const shipType = 'carrier';
    const coords = [0,2];
    const orientation = 'horizontal';
    newBoard.place(shipType, coords, orientation);
    newBoard.receiveAttack([0,2]);
    newBoard.receiveAttack([0,3]);
    newBoard.receiveAttack([0,4]);
    newBoard.receiveAttack([0,5]);
    newBoard.receiveAttack([0,6]);
    expect(newBoard.shipsSunk).toEqual(1);
});

