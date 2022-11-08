import Ship from "./Ship"

export default function Gameboard() {
    
    let board = [];
    for (let i = 0; i < 10; i++) {
        board.push([]);
        for (let j = 0; j < 10; j++) {
            board[i].push(j);
        }
    }

    return {
        board: board,
        shipsSunk: 0,

        // e.g. Gameboard.placeShip('battleship', [4,3], 'horizontal') places a Ship of length
        // 4 at Gameboard coordinate (4,3)
        place(shipType, coords, orientation) {
            let ship;
            let xCoord;
            let yCoord;
            let shipCoords = [];
            
            if (shipType == 'carrier' ||
            shipType == 'battleship' ||
            shipType == 'destroyer' ||
            shipType == 'submarine' ||
            shipType == 'patrol') {
                ship = new Ship(shipType);
            } else {
                return 'Error: ship type is not defined'
            }

            if (coords != undefined) {
                xCoord = coords[1];
                yCoord = coords[0];
            } else {
                return 'Error: coords are not defined'
            }

            // Get all the subsequent required coords
            // if the ship is placed horizontally, increase the x-axis
            if (orientation == 'horizontal') {
                for (let i = 0; i < ship.length; i++) {
                    let newCoord = [yCoord, xCoord + i];
                    shipCoords.push(newCoord);
                }
            // if the ship is placed vertically, increase the y-axis
            } else if (orientation == 'vertical') {
                for (let i = 0; i < ship.length; i++) {
                    let newCoord = [yCoord + i, xCoord];
                    shipCoords.push(newCoord);
                }
            } else {
                return 'Error: orientation is not defined'
            }

            // Now we have the shipCoords as an array of coords e.g. [[0,2], [0,3]]
            // We can check if the board coords are free
            
            // For each coord in shipcoords
            for (let i = 0; i < shipCoords.length; i++) {
                let currentSquare;
                let currentCoord = shipCoords[i];
                let currentX = currentCoord[1];
                let currentY = currentCoord[0];
                // Go to the square on the board that matches this coord
                currentSquare = board[currentY][currentX];
                // Check if this square contains a string
                if (typeof currentSquare == 'string') {
                    return 'Error: square is taken'
                }
            }

            for (let i = 0; i < shipCoords.length; i++) {
                let currentCoord = shipCoords[i];
                let currentX = currentCoord[1];
                let currentY = currentCoord[0];
                // Go to the square on the board that matches this coord
                board[currentY][currentX] = ship;
            }

            return board;
        },


        receiveAttack(coords) {
            // Takes a pair of coords and checks if a ship is present
            let result;
            let resultType;
            let xCoord = coords[1];
            let yCoord = coords[0];
            let square = board[yCoord][xCoord];
            if (typeof square == 'string') {
                result = "You've already fired here!";
                resultType = 'bounce';
            } else if (typeof square == 'object') {
                result = 'Direct hit!';
                resultType = 'hit';
                let ship = board[yCoord][xCoord];
                board[yCoord][xCoord] = 'hit';
                ship.hit();
                ship.isSunk();
                if (ship.sunk == true) {
                    result += ' You sunk my ' + ship.type;
                    resultType = 'sink';
                    this.shipsSunk += 1;
                };
            } else if (typeof square == 'number') {
                result = 'Miss!';
                resultType = 'miss';
                board[yCoord][xCoord] = 'miss';
            };
            return {board, result, resultType};
        },

        shipsLeft() {
            return (5 - this.shipsSunk);
        }

    };
};