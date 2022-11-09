// eslint-disable-next-line no-unused-vars
import style from './style.css';
import { Display } from './Display';

// Initialise an empty variable to store the user's name
let username;

// Initialise displayController object and call the buildForm method
const displayController = new Display();
displayController.buildForm();

// get submit btn
const submit = document.getElementById('submit-name');
    
// Add event listener to submit btn
submit.addEventListener('click', function(e) {
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
    displayController.setUsername(username);
    //displayController.startGame(username);
    displayController.buildCoordsForm();
});




