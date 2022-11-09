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


it('throws error when coords not from 0-9', () => {
    const newBoard = new Gameboard();
    const shipType = 'carrier';
    const orientation = 'horizontal';
    const coords1 = [10,0];
    const coords2 = [3,-1];
    const coords3 = [-1, 11];
    expect(newBoard.place(shipType, coords1, orientation)).toBe('Error: coords must be from 0-9');
    expect(newBoard.place(shipType, coords2, orientation)).toBe('Error: coords must be from 0-9');
    expect(newBoard.place(shipType, coords3, orientation)).toBe('Error: coords must be from 0-9');
})
