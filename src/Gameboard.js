import Ship from "./Ship";

export default function Gameboard(owner) {
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
    owner: owner,

    // Places a ship on the board
    place(shipType, coords, orientation) {
      let ship;
      let xCoord;
      let yCoord;
      let shipCoords = [];
      // Make the ship, or return an error if shipType not defined
      if (
        shipType == "carrier" ||
        shipType == "battleship" ||
        shipType == "destroyer" ||
        shipType == "submarine" ||
        shipType == "patrol"
      ) {
        ship = new Ship(shipType);
      } else {
        return "Error: ship type is not defined";
      }
      // If coords are not defined, return error
      if (coords != undefined) {
        xCoord = parseInt(coords[1]);
        yCoord = parseInt(coords[0]);
      } else {
        return "Error: coords are not defined";
      }
      // If coords not between 0-9, return error
      if (xCoord < 0 || xCoord > 9 || yCoord < 0 || yCoord > 9) {
        return "Error: coords must be from 0-9";
      }
      // Get all the subsequent required coords
      // if the ship is placed horizontally, increase the x-axis
      if (orientation == "horizontal") {
        for (let i = 0; i < ship.length; i++) {
          let newCoord = [yCoord, xCoord + i];
          shipCoords.push(newCoord);
        }
        // if the ship is placed vertically, increase the y-axis
      } else if (orientation == "vertical") {
        for (let i = 0; i < ship.length; i++) {
          let newCoord = [yCoord + i, xCoord];
          shipCoords.push(newCoord);
        }
      } else {
        return "Error: orientation is not defined";
      }
      // Now we have the shipCoords as an array of coords e.g. [[0,2], [0,3]], we can check if the board coords are free
      // For each coord in shipcoords
      for (let i = 0; i < shipCoords.length; i++) {
        let currentSquare;
        let currentCoord = shipCoords[i];
        let currentX = currentCoord[1];
        let currentY = currentCoord[0];
        // Go to the square on the board that matches this coord
        currentSquare = board[currentY][currentX];
        // Check if this square contains a ship already
        if (typeof currentSquare == "object") {
          return "Error: square is taken";
        }
      }
      for (let i = 0; i < shipCoords.length; i++) {
        let currentCoord = shipCoords[i];
        let currentX = currentCoord[1];
        let currentY = currentCoord[0];
        // Go to the square on the board that matches this coord
        board[currentY][currentX] = ship;
        let id = owner.name + "-cell-" + currentY + "-" + currentX;
        let cell = document.querySelector(`[data-coord="${id}"]`);
        cell.classList.add("ship");
        cell.classList.add("open");
      }
      return board;
    },

    // Takes a pair of coords to receive an attack and returns the attack result
    receiveAttack(coords) {
      let result;
      let resultType;
      let xCoord = coords[1];
      let yCoord = coords[0];
      let square = board[yCoord][xCoord];
      if (typeof square == "string") {
        result = "You've already fired here!";
        resultType = "bounce";
      } else if (typeof square == "object") {
        result = "Direct hit!";
        resultType = "hit";
        let ship = board[yCoord][xCoord];
        board[yCoord][xCoord] = "hit";
        ship.hit();
        ship.isSunk();
        if (ship.sunk == true) {
          result += " You sunk my " + ship.type;
          resultType = "sink";
          this.shipsSunk += 1;
        }
      } else if (typeof square == "number") {
        result = "Miss!";
        resultType = "miss";
        board[yCoord][xCoord] = "miss";
      }
      return { board, result, resultType, coords };
    },

    // Returns the number of ships remaining on the board
    shipsLeft() {
      return 5 - this.shipsSunk;
    }
  };
}
