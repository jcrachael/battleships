# Battleships

A Battleships game built with vanilla JavaScript test-driven-development using [Jest](https://jestjs.io/), packaged with [Webpack](https://webpack.js.org/).


Projcet sourced from [The Odin Project JavaScript course](https://www.theodinproject.com/lessons/node-path-javascript-battleship).

## About

The board is a 10x10 2-dimensional array as follows:

```javascript
Gameboard.board = 
[ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
]
```
Each array value represents a cell on the board, for example, the top-left cell is at `board[0][0]`, and the bottom-right cell is at `board[9][9]`.

E.g. to put a `Submarine` vertically at `board[3][4]`, the ship's coordinates will be





Last modified: 8 November 2022