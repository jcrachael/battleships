import { Game } from "./Game";

function Display() {

    // initialise variables
    const main = document.getElementById('main');
    let currentInput = [];
    let coords;
    let orients;
    let username;
    let game;

    // Remove all children from main
    function clearMain() {
        main.innerHTML = '';
    }

    // set username
    function setUsername(name) {
        return username = name;
    }
    
    function getUsername() {
        return username;
    }

    // Display the username form
    function buildForm() {
        // make outer container
        const container = document.createElement('div');
        container.setAttribute('id', 'get-username-container');
        container.classList.add('form-container');
        main.appendChild(container);

        // make form
        const form = document.createElement('form');
        form.setAttribute('id', 'get-username-form');
        container.appendChild(form);

        // make legend
        const legend = document.createElement('legend');
        legend.innerText = 'Enter your name to begin';
        form.appendChild(legend);


        // make div class 'form-control'
        const formControl = document.createElement('div');
        formControl.classList.add('form-control');
        form.appendChild(formControl);

        // make label
        const label = document.createElement('label');
        label.setAttribute('for', 'username');
        label.innerText = 'Your name:';
        formControl.appendChild(label);

        // make input type text
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'username');
        input.setAttribute('id', 'username');
        input.setAttribute('placeholder', 'Name');
        formControl.appendChild(input);

        // make submit btn
        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submit-name');
        submit.setAttribute('value', 'Next');
        formControl.appendChild(submit);
    }

    // Print a game board
    function printBoard(board) {
        // make outer container
        const outerdiv = document.createElement('div');
        outerdiv.setAttribute('id', 'board-' + board.owner.name);
        main.appendChild(outerdiv);
        // make header
        const divheader = document.createElement('p');
        divheader.classList.add('board-header');
        divheader.innerText = board.owner.name + "'s board";
        outerdiv.appendChild(divheader);
        // make inner container
        const innerdiv = document.createElement('div');
        innerdiv.classList.add('board-container');
        outerdiv.appendChild(innerdiv)
        // make cells
        for (let i = 0; i < board.board.length; i++) {
            for (let j = 0; j < board.board[i].length; j++) {
                const cell = document.createElement('div');
                if (typeof board.board[i][j] == 'object') {
                    cell.classList.add('cell-ship');   
                } else {
                    cell.classList.add(`cell-${board.board[i][j]}`);
                }
                cell.classList.add('cell');
                cell.classList.add('open');
                cell.classList.add('cell-' + board.owner.name);
                cell.setAttribute('data-coord', `${board.owner.name}-cell-${i}-${j}`);
                innerdiv.appendChild(cell);
            };
        // Remove open class from used cells
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            // Remove 'open' class from this cell if it has been used
            if (cell.classList.contains('cell-miss') || 
                cell.classList.contains('cell-ship') ||
                cell.classList.contains('cell-hit')) {
                cell.classList.remove('open');
            }
        })
        };

        
    };

    function getInput() {
        return currentInput
    };

    function buildCoordsForm() {
        // make outer container
        const container = document.createElement('div');
        container.setAttribute('id', 'get-coords-container');
        container.classList.add('form-container');
        main.appendChild(container);

        // make form
        const form = document.createElement('form');
        form.setAttribute('id', 'get-coords-form');
        container.appendChild(form);
        
        // make legend
        const legend = document.createElement('legend');
        legend.innerText = 'Enter your ship coordinates';
        form.appendChild(legend);


        // CARRIER
        // make carrier div class 'form-control'
        const carrierFormControl = document.createElement('div');
        carrierFormControl.classList.add('form-control');
        form.appendChild(carrierFormControl);

        // make Carrier label
        const carrierlabel = document.createElement('label');
        carrierlabel.setAttribute('for', 'carrier');
        carrierlabel.innerText = 'Carrier:';
        carrierFormControl.appendChild(carrierlabel);

        // make Carrier input type text
        const carrierinput = document.createElement('input');
        carrierinput.setAttribute('type', 'text');
        carrierinput.setAttribute('name', 'carrier');
        carrierinput.setAttribute('id', 'carrier');
        carrierinput.setAttribute('placeholder', '0, 0');
        carrierFormControl.appendChild(carrierinput);

        // make Carrier radios
        const carrierRadioContainer = document.createElement('div');
        carrierRadioContainer.classList.add('radio-container');
        carrierFormControl.appendChild(carrierRadioContainer)

        const carrierRadioHor = document.createElement('input');
        carrierRadioHor.setAttribute('type', 'radio');
        carrierRadioHor.setAttribute('id', 'carrier-horizontal');
        carrierRadioHor.setAttribute('name', 'carrier-orientation');
        carrierRadioHor.setAttribute('value', 'horizontal');

        const carrierRadioHorLabel = document.createElement('label');
        carrierRadioHorLabel.setAttribute('for', 'horizontal');
        carrierRadioHorLabel.innerText = 'Horizontal';

        carrierRadioContainer.appendChild(carrierRadioHor);
        carrierRadioContainer.appendChild(carrierRadioHorLabel);

        const carrierRadioVer = document.createElement('input');
        carrierRadioVer.setAttribute('type', 'radio');
        carrierRadioVer.setAttribute('id', 'carrier-vertical');
        carrierRadioVer.setAttribute('name', 'carrier-orientation');
        carrierRadioVer.setAttribute('value', 'vertical');

        const carrierRadioVerLabel = document.createElement('label');
        carrierRadioVerLabel.setAttribute('for', 'vertical');
        carrierRadioVerLabel.innerText = 'Vertical';
        
        carrierRadioContainer.appendChild(carrierRadioVer);
        carrierRadioContainer.appendChild(carrierRadioVerLabel);


        // BATTLESHIP
        // make battleship div class 'form-control'
        const battleshipFormControl = document.createElement('div');
        battleshipFormControl.classList.add('form-control');
        form.appendChild(battleshipFormControl);

        // make battleship label
        const battleshiplabel = document.createElement('label');
        battleshiplabel.setAttribute('for', 'battleship');
        battleshiplabel.innerText = 'Battleship:';
        battleshipFormControl.appendChild(battleshiplabel);

        // make battleship input type text
        const battleshipinput = document.createElement('input');
        battleshipinput.setAttribute('type', 'text');
        battleshipinput.setAttribute('name', 'battleship');
        battleshipinput.setAttribute('id', 'battleship');
        battleshipinput.setAttribute('placeholder', '0, 0');
        battleshipFormControl.appendChild(battleshipinput);

        // make battleship radios
        const battleshipRadioContainer = document.createElement('div');
        battleshipRadioContainer.classList.add('radio-container');
        battleshipFormControl.appendChild(battleshipRadioContainer)

        const battleshipRadioHor = document.createElement('input');
        battleshipRadioHor.setAttribute('type', 'radio');
        battleshipRadioHor.setAttribute('id', 'battleship-horizontal');
        battleshipRadioHor.setAttribute('name', 'battleship-orientation');
        battleshipRadioHor.setAttribute('value', 'horizontal');

        const battleshipRadioHorLabel = document.createElement('label');
        battleshipRadioHorLabel.setAttribute('for', 'horizontal');
        battleshipRadioHorLabel.innerText = 'Horizontal';

        battleshipRadioContainer.appendChild(battleshipRadioHor);
        battleshipRadioContainer.appendChild(battleshipRadioHorLabel);

        const battleshipRadioVer = document.createElement('input');
        battleshipRadioVer.setAttribute('type', 'radio');
        battleshipRadioVer.setAttribute('id', 'battleship-vertical');
        battleshipRadioVer.setAttribute('name', 'battleship-orientation');
        battleshipRadioVer.setAttribute('value', 'vertical');

        const battleshipRadioVerLabel = document.createElement('label');
        battleshipRadioVerLabel.setAttribute('for', 'vertical');
        battleshipRadioVerLabel.innerText = 'Vertical';
        
        battleshipRadioContainer.appendChild(battleshipRadioVer);
        battleshipRadioContainer.appendChild(battleshipRadioVerLabel);


        // DESTROYER
        // make destroyer div class 'form-control'
        const destroyerFormControl = document.createElement('div');
        destroyerFormControl.classList.add('form-control');
        form.appendChild(destroyerFormControl);

        // make destroyer label
        const destroyerlabel = document.createElement('label');
        destroyerlabel.setAttribute('for', 'destroyer');
        destroyerlabel.innerText = 'Destroyer:';
        destroyerFormControl.appendChild(destroyerlabel);

        // make destroyer input type text
        const destroyerinput = document.createElement('input');
        destroyerinput.setAttribute('type', 'text');
        destroyerinput.setAttribute('name', 'destroyer');
        destroyerinput.setAttribute('id', 'destroyer');
        destroyerinput.setAttribute('placeholder', '0, 0');
        destroyerFormControl.appendChild(destroyerinput);

        // make destroyer radios
        const destroyerRadioContainer = document.createElement('div');
        destroyerRadioContainer.classList.add('radio-container');
        destroyerFormControl.appendChild(destroyerRadioContainer)

        const destroyerRadioHor = document.createElement('input');
        destroyerRadioHor.setAttribute('type', 'radio');
        destroyerRadioHor.setAttribute('id', 'destroyer-horizontal');
        destroyerRadioHor.setAttribute('name', 'destroyer-orientation');
        destroyerRadioHor.setAttribute('value', 'horizontal');

        const destroyerRadioHorLabel = document.createElement('label');
        destroyerRadioHorLabel.setAttribute('for', 'horizontal');
        destroyerRadioHorLabel.innerText = 'Horizontal';

        destroyerRadioContainer.appendChild(destroyerRadioHor);
        destroyerRadioContainer.appendChild(destroyerRadioHorLabel);

        const destroyerRadioVer = document.createElement('input');
        destroyerRadioVer.setAttribute('type', 'radio');
        destroyerRadioVer.setAttribute('id', 'destroyer-vertical');
        destroyerRadioVer.setAttribute('name', 'destroyer-orientation');
        destroyerRadioVer.setAttribute('value', 'vertical');

        const destroyerRadioVerLabel = document.createElement('label');
        destroyerRadioVerLabel.setAttribute('for', 'vertical');
        destroyerRadioVerLabel.innerText = 'Vertical';
        
        destroyerRadioContainer.appendChild(destroyerRadioVer);
        destroyerRadioContainer.appendChild(destroyerRadioVerLabel);


        // SUBMARINE
        // make submarine div class 'form-control'
        const submarineFormControl = document.createElement('div');
        submarineFormControl.classList.add('form-control');
        form.appendChild(submarineFormControl);

        // make submarine label
        const submarinelabel = document.createElement('label');
        submarinelabel.setAttribute('for', 'submarine');
        submarinelabel.innerText = 'Submarine:';
        submarineFormControl.appendChild(submarinelabel);

        // make submarine input type text
        const submarineinput = document.createElement('input');
        submarineinput.setAttribute('type', 'text');
        submarineinput.setAttribute('name', 'submarine');
        submarineinput.setAttribute('id', 'submarine');
        submarineinput.setAttribute('placeholder', '0, 0');
        submarineFormControl.appendChild(submarineinput);

        // make submarine radios
        const submarineRadioContainer = document.createElement('div');
        submarineRadioContainer.classList.add('radio-container');
        submarineFormControl.appendChild(submarineRadioContainer)

        const submarineRadioHor = document.createElement('input');
        submarineRadioHor.setAttribute('type', 'radio');
        submarineRadioHor.setAttribute('id', 'submarine-horizontal');
        submarineRadioHor.setAttribute('name', 'submarine-orientation');
        submarineRadioHor.setAttribute('value', 'horizontal');

        const submarineRadioHorLabel = document.createElement('label');
        submarineRadioHorLabel.setAttribute('for', 'horizontal');
        submarineRadioHorLabel.innerText = 'Horizontal';

        submarineRadioContainer.appendChild(submarineRadioHor);
        submarineRadioContainer.appendChild(submarineRadioHorLabel);

        const submarineRadioVer = document.createElement('input');
        submarineRadioVer.setAttribute('type', 'radio');
        submarineRadioVer.setAttribute('id', 'submarine-vertical');
        submarineRadioVer.setAttribute('name', 'submarine-orientation');
        submarineRadioVer.setAttribute('value', 'vertical');

        const submarineRadioVerLabel = document.createElement('label');
        submarineRadioVerLabel.setAttribute('for', 'vertical');
        submarineRadioVerLabel.innerText = 'Vertical';
        
        submarineRadioContainer.appendChild(submarineRadioVer);
        submarineRadioContainer.appendChild(submarineRadioVerLabel);


        // PATROL BOAT
        // make patrol div class 'form-control'
        const patrolFormControl = document.createElement('div');
        patrolFormControl.classList.add('form-control');
        form.appendChild(patrolFormControl);

        // make patrol label
        const patrollabel = document.createElement('label');
        patrollabel.setAttribute('for', 'patrol');
        patrollabel.innerText = 'Patrol boat:';
        patrolFormControl.appendChild(patrollabel);

        // make patrol input type text
        const patrolinput = document.createElement('input');
        patrolinput.setAttribute('type', 'text');
        patrolinput.setAttribute('name', 'patrol');
        patrolinput.setAttribute('id', 'patrol');
        patrolinput.setAttribute('placeholder', '0, 0');
        patrolFormControl.appendChild(patrolinput);

        // make patrol radios
        const patrolRadioContainer = document.createElement('div');
        patrolRadioContainer.classList.add('radio-container');
        patrolFormControl.appendChild(patrolRadioContainer)

        const patrolRadioHor = document.createElement('input');
        patrolRadioHor.setAttribute('type', 'radio');
        patrolRadioHor.setAttribute('id', 'patrol-horizontal');
        patrolRadioHor.setAttribute('name', 'patrol-orientation');
        patrolRadioHor.setAttribute('value', 'horizontal');

        const patrolRadioHorLabel = document.createElement('label');
        patrolRadioHorLabel.setAttribute('for', 'horizontal');
        patrolRadioHorLabel.innerText = 'Horizontal';

        patrolRadioContainer.appendChild(patrolRadioHor);
        patrolRadioContainer.appendChild(patrolRadioHorLabel);

        const patrolRadioVer = document.createElement('input');
        patrolRadioVer.setAttribute('type', 'radio');
        patrolRadioVer.setAttribute('id', 'patrol-vertical');
        patrolRadioVer.setAttribute('name', 'patrol-orientation');
        patrolRadioVer.setAttribute('value', 'vertical');

        const patrolRadioVerLabel = document.createElement('label');
        patrolRadioVerLabel.setAttribute('for', 'vertical');
        patrolRadioVerLabel.innerText = 'Vertical';
        
        patrolRadioContainer.appendChild(patrolRadioVer);
        patrolRadioContainer.appendChild(patrolRadioVerLabel);


        //SUBMIT
        // make submit div class 'form-control'
        const submitFormControl = document.createElement('div');
        submitFormControl.classList.add('form-control');
        form.appendChild(submitFormControl);

        // make submit btn
        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submit-coords');
        submit.setAttribute('value', 'Play');
        submitFormControl.appendChild(submit);

        submit.addEventListener('click', function(e) {
            e.preventDefault();

            
            getUserShipsForm();
            
       
        })
    }

    // Get user's coords for placing their ships 
    function getUserShipsForm() {
 
        // DEBUG console logs
        console.log('Play button clicked')

        const carrierinput = document.getElementById('carrier');
        const carrierRadioHor = document.getElementById('carrier-horizontal');
        const carrierRadioVer = document.getElementById('carrier-vertical');
        const battleshipinput = document.getElementById('battleship');
        const battleshipRadioHor = document.getElementById('battleship-horizontal');
        const battleshipRadioVer = document.getElementById('battleship-vertical');
        const destroyerinput = document.getElementById('destroyer');
        const destroyerRadioHor = document.getElementById('destroyer-horizontal');
        const destroyerRadioVer = document.getElementById('destroyer-vertical');
        const submarineinput = document.getElementById('submarine');
        const submarineRadioHor = document.getElementById('submarine-horizontal');
        const submarineRadioVer = document.getElementById('submarine-vertical');
        const patrolinput = document.getElementById('patrol')
        const patrolRadioHor = document.getElementById('patrol-horizontal');
        const patrolRadioVer = document.getElementById('patrol-vertical');

        // get coords
        let carrier = carrierinput.value.split(',');
        let battleship = battleshipinput.value.split(',');
        let destroyer = destroyerinput.value.split(',');
        let submarine = submarineinput.value.split(',');
        let patrolBoat = patrolinput.value.split(',');

        let thesecoords = {
            carrier: carrier,
            battleship: battleship,
            destroyer: destroyer,
            submarine: submarine,
            patrolBoat: patrolBoat
        }
  
        setUserShips(thesecoords);
        

        // get orientations
        let carrierOrient;
        let battleshipOrient;
        let destroyerOrient;
        let submarineOrient;
        let patrolOrient;
        // carrier
        if (carrierRadioHor.checked) {
            carrierOrient = 'horizontal'
        } else if (carrierRadioVer.checked) {
            carrierOrient = 'vertical'
        }
        // battleship
        if (battleshipRadioHor.checked) {
            battleshipOrient = 'horizontal'
        } else if (battleshipRadioVer.checked) {
            battleshipOrient = 'vertical'
        }
        // destroyer
        if (destroyerRadioHor.checked) {
            destroyerOrient = 'horizontal'
        } else if (destroyerRadioVer.checked) {
            destroyerOrient = 'vertical'
        }
        // submarine
        if (submarineRadioHor.checked) {
            submarineOrient = 'horizontal'
        } else if (submarineRadioVer.checked) {
            submarineOrient = 'vertical'
        }
        // patrol
        if (patrolRadioHor.checked) {
            patrolOrient = 'horizontal'
        } else if (patrolRadioVer.checked) {
            patrolOrient = 'vertical'
        }

        let orientations = {
            carrierOrient: carrierOrient,
            battleshipOrient: battleshipOrient,
            destroyerOrient: destroyerOrient,
            submarineOrient: submarineOrient,
            patrolOrient: patrolOrient
        }

        setUserShipOrients(orientations);

        let orients = getUserOrients();
        let coords = getUserCoords();

        for (const key in coords) {
            let value = coords[key];
      
            if (value == undefined) {
                console.log('Error: not all coordinates provided');
                return 
            }
        }


        for (const key in orients) {
            let value = orients[key];
 
            if (value == undefined) {
                console.log('Error: not all orientations provided');
                return
            }
        }

        


        main.innerHTML = '';
        startGame(username);
        
    }

    // set the user ship coords
    function setUserShips(obj) {
         
        for (const key in obj) {
            let value = obj[key];

            if (value == '') {
                return 'Error: not all coordinates provided'
            }
        }
     
        return coords = {
            userCarrier: Object.values(obj)[0],
            userBattleship: Object.values(obj)[1],
            userDestroyer: Object.values(obj)[2],
            userSubmarine: Object.values(obj)[3],
            userPatrolBoat: Object.values(obj)[4]
        }

    }

    function getUserCoords() {
        return coords;
    }

    function setUserShipOrients(obj) {

        for (const key in obj) {
            let value = obj[key];

            if (value == '') {
                return 'Error: not all orientations provided'
            }
        }

        return orients = {
            userCarrierOrient: Object.values(obj)[0],
            userBattleshipOrient: Object.values(obj)[1],
            userDestroyerOrient: Object.values(obj)[2],
            userSubmarineOrient: Object.values(obj)[3],
            userPatrolBoatOrient: Object.values(obj)[4]
        }
    }

    function getUserOrients() {
        return orients;
    }



    function startGame(name) {
        game = new Game(name);

        

        // Get the board that belongs to this user
        
        // Get user input to populate user's board
        

        // Print the boards
        printBoard(game.humanBoard);
        // printBoard(game.AiBoard);

        // Populate the boards
        let coords = getUserCoords();
        let orients = getUserOrients();

        game.populateHumanBoard(game.humanBoard, coords, orients);
        // game.populateAiBoard(game.AiBoard);


        // Add event listeners for AI's board's cells
        let query = '.cell-' + game.AiBoard.owner.name;
        const cells = document.querySelectorAll(query);    
        cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                    
                    // Remove 'open' class from this cell
                    if (cell.classList.contains('open')) {
                        cell.classList.remove('open');
                    }
                    // Get user's input
                    let input = [];
                    // save the input that was clicked
                    let coordString = cell.getAttribute('data-coord').slice(5).replace(/-/, '');
                    for (let i = 0; i < coordString.length; i++) {
                        input.push(coordString[i])
                    }
                    currentInput = input;
                    // DEBUG console log
                    console.log('Clicked: ' + input)
                })
            })
        
        
        


        // Commence while loop
        game.playGame();
        
        // Once gameOver is true, end and return winner
        
        return game.winner;
    }



    return {
        game: game,
        coords: coords,
        orients: orients,
        startGame: startGame,
        clearMain: clearMain,
        getUsername: getUsername,
        setUsername: setUsername,
        buildForm: buildForm,
        printBoard: printBoard,
        getInput: getInput,
        getUserShipsForm: getUserShipsForm,
        buildCoordsForm: buildCoordsForm

    };

}

export { Display }