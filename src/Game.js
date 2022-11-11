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

    // Performs the human's turn
    function humanTurn(input) {
        // human's turn
        let usedCoords = humanPlayer.usedCoords;
        let attack = AiBoard.receiveAttack(input);
        let l = Object.keys(usedCoords).length;
        usedCoords[l] = input;

        // update the display
        let inputString = input.toString();
        let coord = inputString.replace(",", "-");
        let cell = document.querySelector(`[data-coord="Jasper-cell-${coord}"]`)
        cell.classList.remove('open');
        cell.classList.add(attack.resultType);

        // If a ship was just sunk,
        if (attack.resultType === 'sink') {
            // Check if shipsLeft on receiving board
            let remainingShips = AiBoard.shipsLeft();
            if (remainingShips === 0) {
                // If the receiving board has no ships left, the active player wins
                winner = humanPlayer;
                gameOver = true;
                return gameOver;
            }
        }

        return attack;
    }

    // Performs the AI's turn
    function AiTurn() {
        // Get random coords
        let coords = AiPlayer.randomCoords();
        let usedCoords = AiPlayer.usedCoords;
        let turn = AiPlayer.randomTurn(usedCoords, coords);
        let aiInput = turn.coords;
        let aiAttack = humanBoard.receiveAttack(aiInput);

        // Console
        console.log('AI attack: ' + aiAttack.resultType);

        // update the display
        let aiInputString = aiInput.toString();
        let aiCoord = aiInputString.replace(",", "-");
        let aiCell = document.querySelector(`[data-coord="${humanBoard.owner.name}-cell-${aiCoord}"]`);

        aiCell.classList.remove('open');
        aiCell.classList.add(aiAttack.resultType);

        // If a ship was just sunk,
        if (aiAttack.resultType === 'sink') {
            // Check if shipsLeft on receiving board
            let remainingShips = humanBoard.shipsLeft();
            if (remainingShips === 0) {
                // If the receiving board has no ships left, the active player wins
                winner = AiPlayer;
                gameOver = true;
                return gameOver;
            }
        }

        return {aiAttack, aiInput};
    }

    // play a round
    function playRound(input) {
        let humanTurnRes = humanTurn(input);

        let winner = checkWinner();
        if (winner) {
            gameOver = true;
            return { winner, gameOver }
        }

        let aiTurnRes = setTimeout(AiTurn, 500);

        winner = checkWinner();

        if (winner) {
            gameOver = true;
            return { winner, gameOver }
        }

        console.log('No winner yet, have another turn');

        return {humanTurnRes, aiTurnRes}

    }


    // Check for a winner
    function checkWinner() {
        if (!gameOver) { return }
        else if (gameOver) {
            // Once gameOver is true
            // If winner is null, declare a draw
            if (winner == null) {
                winner = 'Draw'
            };
            // DEBUG CONSOLE LOGS
            console.log('The winner is ' + winner.name)
            return winner
        }
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
        checkWinner: checkWinner,
        playRound: playRound,
    }
}









export { Game }