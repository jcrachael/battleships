import { Player, AiPlayer } from "./Player";
import { Display } from "./Display";
import Gameboard from "./Gameboard";
const display = new Display();
function Game(name) {
    // Initialise a new Player for the user
    let humanPlayer = new Player(name);

    // Initialise the boards
    let AiBoard = new Gameboard(AiPlayer);
    let humanBoard = new Gameboard(humanPlayer);
    let prevAIturn = {};
    let prevPrevAIturn = {};
    let invalidCoords = {};

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
        let message = humanPlayer.name + '\'s turn...';
        display.updateComment(message);
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

        display.appendInlineComment(attack.result);

        // If a ship was just sunk,
        if (attack.resultType === 'sink') {
            let message = 'Jasper says, "You sunk my battleship."'
            display.updateComment(message);
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
    
    
    function checkSmartTurn(usedCoords, coords, adjacents) {
        // First, check if the supplied coords have been used
        let isSubArray = AiPlayer.isSubset(coords, usedCoords);
    
        // base case
        // If the coords do not match any used coords, they are valid
        if (isSubArray === false) {
            // Store the new coords in the usedCoords array because we will use them
            let newArray = [coords[0], coords[1]]
            let l = Object.keys(usedCoords).length;
            usedCoords[l] = newArray;
            // Return the coords and usedCoords
            return {coords, usedCoords}
        } 
        // If the coords do match, they are invalid
        // get new smart coords
        let newCoords = newSmartCoords(coords, adjacents, usedCoords);

        // Try to validate again
        return checkSmartTurn(usedCoords, newCoords, adjacents);
        
        
    }

    // Takes old coords and returns new coords from the same adjacency list
    function newSmartCoords(oldCoords, adjacents, usedCoords) {

        let l = Object.keys(invalidCoords).length;
        // store the invalid coords in invalidCoords
        invalidCoords[l] = oldCoords;

        console.log(invalidCoords);

        // get new random coords from the adjacents array
        let newCoords = smartCoords(adjacents);

        // check if the new coords are in invalidCoords
        let isNewSub = AiPlayer.isSubset(newCoords, invalidCoords);

        // If the new coords are not in the invalidCoords, we can use them
        if (isNewSub === false) {
            // We can use these coords
            invalidCoords = {};
            return newCoords
        } 

        // If the length of invalidCoords = the length of adjacents, there are
        // no valid coords in adjacents, so return random coords
        if (l == adjacents.length) {
            // Get random coords
            invalidCoords = {};
            newCoords = AiPlayer.randomCoords();
            return newCoords 
        } 
        
        newCoords = smartCoords(adjacents);
        return newSmartCoords(newCoords, adjacents, usedCoords);
    }

    // Get random coords from an adjacency list
    function smartCoords(adjacents) {
        // Choose a random number between 0 and adjacents.length 
        let max = adjacents.length;
        let randomIndex = Math.floor(Math.random() * max);
        // Set the coords to the randomly chosen index of adjacent squares
        let coords = adjacents[randomIndex];
        return coords
    }

    function getAdjacents(prevCoord) {
        let row = prevCoord[0];
        let col = prevCoord[1];
        let adjacents = [];
        let topLeft = [0,0];
        let topRight = [0,9];
        let bottomLeft = [9,0];
        let bottomRight = [9,9];
        let topRow = {
            0: [0,1],
            1: [0,2],
            2: [0,3],
            3: [0,4],
            4: [0,5],
            5: [0,6],
            6: [0,7],
            7: [0,8]
        };
        let bottomRow = {
            0: [9,1],
            1: [9,2],
            2: [9,3],
            3: [9,4],
            4: [9,5],
            5: [9,6],
            6: [9,7],
            7: [9,8]
        };
        let leftSide = {
            0: [1,0],
            1: [2,0],
            2: [3,0],
            3: [4,0],
            4: [5,0],
            5: [6,0],
            6: [7,0],
            7: [8,0]
        };
        let rightSide = {
            0: [1,9],
            1: [2,9],
            2: [3,9],
            3: [4,9],
            4: [5,9],
            5: [6,9],
            6: [7,9],
            7: [8,9]
        };
        // Get the adjacent squares
        if (prevCoord == topLeft) {
            adjacents = [[0,1], [1,0]];
        } else if (prevCoord == topRight) {
            adjacents = [[0,8], [1,9]];
        } else if (prevCoord == bottomLeft) {
            adjacents = [[8,0], [9,1]];
        } else if (prevCoord == bottomRight) {
            adjacents = [[8,9], [9,8]]
        } else if (AiPlayer.isSubset(prevCoord, topRow)) {
            adjacents = [[row, col - 1], [row, col + 1], [row + 1, col]]
        } else if (AiPlayer.isSubset(prevCoord, bottomRow)) {
            adjacents = [[row, col -1], [row, col + 1], [row - 1, col]]
        } else if (AiPlayer.isSubset(prevCoord, leftSide)) {
            adjacents = [[row - 1, col], [row + 1, col], [row, col + 1]]
        } else if (AiPlayer.isSubset(prevCoord, rightSide)) {
            adjacents = [[row - 1, col], [row + 1, col], [row, col - 1]]
        } else {
            adjacents = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]
        }

        console.log('Adjacents: ');
        console.log(adjacents);

        return adjacents;
    }


    // Performs the AI's turn
    function AiTurn() {

        // Update the comment message
        let message = 'Jasper\'s turn...';
        display.updateComment(message);

        let turn;
        let usedCoords;
        let aiInput;
        let aiAttack;
        let adjacents;
        let coords;
        
        
        let prevObjLength = Object.keys(prevAIturn).length;
        let prevPrevObjLength = Object.keys(prevPrevAIturn).length;


        // DEBUG console log
        console.log('Start of AI\'s move');
        

        // If it's the AI's second or later turn
        if (prevObjLength > 0) {
            
            // DEBUG console log
            console.log('Last AI move was a ' + prevAIturn.attack.resultType);
            
            // Get the data from the prevAiTurn
            let prevResult = prevAIturn.attack.resultType;
            let prevCoord = prevAIturn.coords;
            
            // If it's the AI's third or later turn and the last attack was a miss
            if (prevPrevObjLength > 0 && prevAIturn.attack.resultType == 'miss') {
                console.log('The turn before that was a: ' + prevPrevAIturn.attack.resultType);

                let prevPrevResult = prevPrevAIturn.attack.resultType;
                let prevPrevCoord = prevPrevAIturn.coords;

                console.log('Prev result: ' + prevResult);
                console.log('PrevPrev result: ' + prevPrevResult);

                // If the turn before last was a 'hit'
                if (prevResult == 'miss' && prevPrevResult == 'hit') {

                    console.log('Getting adjacents for prevPrevCoord: ' + prevPrevCoord);

                    // Get the adjacency list for the turn before last
                    adjacents = getAdjacents(prevPrevCoord);

                    if (adjacents.length > 4) {
                        let first = adjacents[0];
                        let second = adjacents[1];
                        let third = adjacents[2];
                        let fourth = adjacents[3];
                        let newAdjList = [first, second, third, fourth];                       
                        adjacents = newAdjList;
                    }
                    

                    console.log(prevPrevCoord);
                    console.log('New adjacents: ');
                    console.log(adjacents)

                    // Set the coords to a random index in adjacents
                    usedCoords = AiPlayer.usedCoords;
                    coords = smartCoords(adjacents);
                    // check the turn is valid
                    turn = checkSmartTurn(usedCoords, coords, adjacents);

                    console.log('This AI turn: ');
                    console.log(turn);

                    // Save the aiAttack 
                    aiInput = turn.coords;
                    aiAttack = humanBoard.receiveAttack(aiInput);

                    
                    console.log('BEFORE UPDATING:');
                    console.log('PrevPrevAIturn: ');
                    console.log(prevPrevAIturn);
                    console.log('Previous AI turn:');
                    console.log(prevAIturn);
                    
                    // Save the old prevAIturn as prevPrevAITurn
                    prevPrevAIturn['attack'] = prevAIturn['attack'];
                    prevPrevAIturn['coords'] = prevAIturn['coords'];

                    // Save the current attack as the new prevAIturn
                    prevAIturn['attack'] = aiAttack;
                    prevAIturn['coords'] = aiAttack.coords;


                    console.log('AFTER UPDATING:');
                    console.log('PrevPrevAIturn: ');
                    console.log(prevPrevAIturn);
                    console.log('Previous AI turn:');
                    console.log(prevAIturn);
                    
                } else {
                    // Get random coords
                    coords = AiPlayer.randomCoords();
                    // Get used coords
                    usedCoords = AiPlayer.usedCoords;
                    // Validate random coords against used coords
                    turn = AiPlayer.randomTurn(usedCoords, coords);
                    // Save the validated coords as aiInput
                    aiInput = turn.coords;
                    // Perform the attack 
                    aiAttack = humanBoard.receiveAttack(aiInput);
                    // The current attack is 'aiAttack'
                    // The previous attack is 'prevAIturn'
                    // The turn before that is 'prevPrevAIturn'
                    // Save the old prevAIturn as prevPrevAITurn
                    prevPrevAIturn['attack'] = prevAIturn['attack'];
                    prevPrevAIturn['coords'] = prevAIturn['coords'];
                    // Save the current attack as the new prevAIturn
                    prevAIturn['attack'] = aiAttack;
                    prevAIturn['coords'] = aiAttack.coords;
                }
            // Else if the last turn was a 'hit'
            } else if (prevResult == 'hit') {
                // Get the adjacency list for the last turn
                adjacents = getAdjacents(prevCoord);
                usedCoords = AiPlayer.usedCoords;
                // Set the coords to a random index in adjacents
                
                coords = smartCoords(adjacents);
                // check the turn is valid
                turn = checkSmartTurn(usedCoords, coords, adjacents);
                // Save the aiAttack 
                aiInput = turn.coords;
                aiAttack = humanBoard.receiveAttack(aiInput);
                

                // Save the old prevAIturn as prevPrevAITurn
                prevPrevAIturn['attack'] = prevAIturn['attack'];
                prevPrevAIturn['coords'] = prevAIturn['coords'];


                // Save the current attack as the new prevAIturn
                prevAIturn['attack'] = aiAttack;
                prevAIturn['coords'] = aiAttack.coords;


            // Else if the last AI turn was not a hit, get random coords
            } else {
                // Get random coords
                coords = AiPlayer.randomCoords();
                // Get used coords
                usedCoords = AiPlayer.usedCoords;
                // Validate random coords against used coords
                turn = AiPlayer.randomTurn(usedCoords, coords);
                // Save the validated coords as aiInput
                aiInput = turn.coords;
                // Perform the attack 
                aiAttack = humanBoard.receiveAttack(aiInput);
                // The current attack is 'aiAttack'
                // The previous attack is 'prevAIturn'
                // The turn before that is 'prevPrevAIturn'
                // Save the old prevAIturn as prevPrevAITurn
                prevPrevAIturn['attack'] = prevAIturn['attack'];
                prevPrevAIturn['coords'] = prevAIturn['coords'];
                // Save the current attack as the new prevAIturn
                prevAIturn['attack'] = aiAttack;
                prevAIturn['coords'] = aiAttack.coords;
                
            }
        // If it is the AI's first turn, get random coords
        } else {
            
            console.log('This is the AI\'s first turn');
            // Get random coords
            coords = AiPlayer.randomCoords();
            // Get the AI's used coords
            usedCoords = AiPlayer.usedCoords;
            // Validate the coords
            turn = AiPlayer.randomTurn(usedCoords, coords);
            // Set aiInput to validated coords
            aiInput = turn.coords;
            // Perform the AI attack on the human board 
            aiAttack = humanBoard.receiveAttack(aiInput);

            // DEBUG console log
            console.log('This turn was a: ' + aiAttack.resultType);

            // Store this attack as the prevAIturn
            prevAIturn['attack'] = aiAttack;
            prevAIturn['coords'] = aiAttack.coords;
        }
        

        setTimeout(function() {

            // update the display
            let aiInputString = aiInput.toString();
            let aiCoord = aiInputString.replace(",", "-");
            let aiCell = document.querySelector(`[data-coord="${humanBoard.owner.name}-cell-${aiCoord}"]`);

            aiCell.classList.remove('open');
            aiCell.classList.add(aiAttack.resultType);
            display.appendInlineComment(aiAttack.result);
            // If a ship was just sunk,
            if (aiAttack.resultType === 'sink') {
                let message = 'Jasper says, "I shot who in the what now?"'
                display.updateComment(message);
                setTimeout(function(){
                    // Check if shipsLeft on receiving board
                    let remainingShips = humanBoard.shipsLeft();
                    if (remainingShips === 0) {
                        // If the receiving board has no ships left, the active player wins
                        winner = AiPlayer;
                        gameOver = true;
                        return gameOver;
                    }
                }, 3000)
                
            }
        }, 500)

        let aiTurnRes = {
            aiAttack: aiAttack,
            aiInput: aiInput,
            coords: coords
        }        

        return aiTurnRes;
    }

    // play a round
    function playRound(input) {
        let humanTurnRes = humanTurn(input);

        let winner = checkWinner();
        if (winner) {
            gameOver = true;
            let msg = humanPlayer.name + ' wins!';
            display.updateComment(msg);
            let message = 'Jasper says, "Oh, well. Easy come, easy go."'
            display.appendComment(message);
            display.endGame();
            return { winner, gameOver }
        }

        let aiTurnRes = setTimeout(AiTurn, 1000);

        winner = checkWinner();

        if (winner) {
            gameOver = true;
            let msg = 'Jasper wins!';
            display.updateComment(msg);
            let message = 'Jasper says, "That\'s a paddlin\'."'
            display.appendComment(message);
            display.endGame();
            return { winner, gameOver }
        }
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