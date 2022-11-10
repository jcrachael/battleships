import { Player, AiPlayer } from "./Player";
import Gameboard from "./Gameboard";

function Game(name) {
    // Initialise a new Player for the user
    let humanPlayer = new Player(name);

    // Initialise the boards
    let AiBoard = new Gameboard(AiPlayer);
    let humanBoard = new Gameboard(humanPlayer);

    // Initalise gameOver to be false and winner to be null
    let gameOver = false;
    let winner = null;
    
    // Let the humanPlayer go first by default
    let activePlayer = humanPlayer;
    let receivingBoard = AiBoard;

    // Populate each board with ships
    // TODO: make AiBoard populate randomly and humanBoard by user input
    // humanBoard
    function populateHumanBoard(board, coords, orients) {
        board.place('carrier', coords['userCarrier'], orients['userCarrierOrient']);
        board.place('battleship', coords['userBattleship'], orients['userBattleshipOrient']);
        board.place('destroyer', coords['userDestroyer'], orients['userDestroyerOrient']);
        board.place('submarine', coords['userSubmarine'], orients['userSubmarineOrient']);
        board.place('patrol', coords['userPatrolBoat'], orients['userPatrolBoatOrient']);
    }

    // AiBoard
    function populateAiBoard(board, coords, orients) {
        board.place('carrier', coords['carrier'], orients['carrierOrient']);
        board.place('battleship', coords['battleship'], orients['battleshipOrient']);
        board.place('destroyer', coords['destroyer'], orients['destroyerOrient']);
        board.place('submarine', coords['submarine'], orients['submarineOrient']);
        board.place('patrol', coords['patrol'], orients['patrolOrient']);
    }

    // Play a round
    function playRound() {
        // Initialise an input variable
        let input;
    
        if (activePlayer == humanPlayer) {
            console.log('Human\'s turn');
            // Get user's coord to attack (from the click event)
            let coords = humanPlayer.randomCoords();
            console.log('Human\'s first coords: ' + coords)
            let usedCoords = humanPlayer.usedCoords;
            let turn = humanPlayer.randomTurn(usedCoords, coords);
            if (turn == undefined) {
                console.log('Turn is undefined') 
            }
          
            input = turn.coords;
            console.log('Human\'s input: ' + input);
            
        } else if (activePlayer == AiPlayer) {
            console.log('Computer\'s turn')
            // Get random coords
            let coords = AiPlayer.randomCoords();
            console.log('Computer\'s first coords: ' + coords)
            let usedCoords = AiPlayer.usedCoords;
            let turn = AiPlayer.randomTurn(usedCoords, coords);
       
            input = turn.coords;
            console.log('Computer\'s input: ' + input);
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
                return gameOver;
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
        return gameOver;
    };


    // Play the game
    function playGame() {
        while (!gameOver) {
            // Play rounds of the game
            playRound();
        }

        // Once gameOver is true
        // If winner is null, declare a draw
        if (winner == null) {
            winner = 'Draw'
        };
        // DEBUG CONSOLE LOGS
        console.log('The winner is ' + winner.name)
        return winner

    }
    
    return {
        humanPlayer: humanPlayer,
        AiPlayer: AiPlayer,
        gameOver: gameOver,
        winner: winner,
        humanBoard: humanBoard,
        AiBoard: AiBoard,
        activePlayer: activePlayer,
        receivingBoard: receivingBoard,
        populateAiBoard: populateAiBoard,
        populateHumanBoard: populateHumanBoard,
        playGame: playGame,
    }
}









export { Game }