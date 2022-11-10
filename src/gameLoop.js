import { Display } from './Display';
import { getNameForm } from './getNameForm';
import { getCoordsForm } from './getCoordsForm';

function gameLoop() {

    // Initialise displayController, the getNameForm and getCoordsForm objects
    const displayController = new Display();
    const getName = new getNameForm();
    const coordsForm = new getCoordsForm();
    // Initialise an empty variable to store the user's name
    let username;

    // Start the game by displaying the get name screen
    function init() {
        // Display the get name form
        getName.display();
        setNameFormListener();
    };

    // Helper functions to set form submit button event listeners
    function setNameFormListener() {
        // get submit name btn
        const submitName = document.getElementById('submit-name');
                    
        // Add event listener to submit btn
        submitName.addEventListener('click', function(e) {
            // prevent default form submission
            e.preventDefault();
            // get user's input
            const input = document.getElementById('username');
            if (input.value == '') {
                username = 'User';
            } else {
                username = input.value;
            }
            // clear main
            const main = document.getElementById('main');
            main.innerHTML = '';
            // set the username
            displayController.setUsername(username);
            // display the coords form
            coordsForm.display();
            setCoordFormListener();
        });
    }

    function setCoordFormListener() {
        // get coords submit
        const submitCoords = document.getElementById('submit-coords');
        submitCoords.addEventListener('click', function(e) {
            e.preventDefault();
            displayController.getUserShips();
        });
    }
    
    return {
        init: init,
    }

}






export {gameLoop}