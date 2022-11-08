import { Player, AiPlayer } from "./Player";
import Gameboard from "./Gameboard";

function Game() {
    
    // TODO: Get the user's input for name
    let name = 'Player one';

    // Initialise a new Player for the user
    let humanPlayer = new Player(name);

    // Initialise the boards
    let AiBoard = new Gameboard();
    let humanBoard = new Gameboard();

    // Populate each board with ships
    // TODO: make AiBoard populate randomly and humanBoard by user input
    
    // humanBoard
    humanBoard.place('carrier', [0,0], 'vertical');
    humanBoard.place('battleship', [1,2], 'horizontal');
    humanBoard.place('destroyer', [8,7], 'horizontal');
    humanBoard.place('submarine', [9,5], 'horizontal');
    humanBoard.place('patrol', [1,8], 'vertical');

    // AiBoard
    AiBoard.place('carrier', [8,0], 'horizontal');
    AiBoard.place('battleship', [3,6], 'vertical');
    AiBoard.place('destroyer', [6,1], 'horizontal');
    AiBoard.place('submarine', [2,2], 'vertical');
    AiBoard.place('patrol', [5,8], 'horizontal');

    // Initalise gameOver to be false and winner to be null
    let gameOver = false;
    let winner = null;
    
    // Let the humanPlayer go first by default
    let activePlayer = humanPlayer;
    let receivingBoard = AiBoard;

    // TODO: change to While gameOver is false
    while (!gameOver) {
        // Play rounds of the game

        // Initialise an input variable
        let input;

        if (activePlayer == humanPlayer) {
            // Get user's coord to attack (from the click event)
            input = AiPlayer.randomTurn();
        } else if (activePlayer == AiPlayer) {
            // Get random coords
            input = AiPlayer.randomTurn();
        }
        
        // Attack the receiving board
        let attack = receivingBoard.receiveAttack(input);
        // If a ship was just sunk,
        if (attack.resultType === 'sink') {
            // Check if shipsLeft on receiving board
            let remainingShips = receivingBoard.shipsLeft();
            if (remainingShips === 0) {
                // If the receiving board has no ships left, the active player wins
                winner = activePlayer;
                gameOver = true;
            }
        }
        // switch the players and receivingBoard for the next turn
        if (activePlayer == humanPlayer) {
            activePlayer = AiPlayer;
            receivingBoard = humanBoard;
        } else if (activePlayer == AiPlayer) {
            activePlayer = humanPlayer;
            receivingBoard = AiBoard;
        }
    }

    // Once gameOver is true
    // If winner is null, declare a draw
    if (winner == null) {
        winner = 'Draw'
    };

    return { winner }
}

export { Game }