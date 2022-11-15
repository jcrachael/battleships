import { Display } from "./Display";
import { getNameForm } from "./getNameForm";
import { getCoordsForm } from "./getCoordsForm";

function gameLoop() {
  // Initialise displayController, getNameForm and getCoordsForm objects
  const displayController = new Display();
  const getName = new getNameForm();
  const coordsForm = new getCoordsForm();
  // Initialise an empty variable to store the user's name
  let username;
  // Starts the game by displaying the get name screen
  function init() {
    // Display the get name form and set its event listener
    getName.display();
    setNameFormListener();
  }

  // Sets the username
  function setUserName(name) {
    username = name;
    return username;
  }

  // Helper function for init() that sets event listener on the get name form
  function setNameFormListener() {
    // get submit name btn
    const submitName = document.getElementById("submit-name");

    // Add event listener to submit btn
    submitName.addEventListener("click", function (e) {
      // prevent default form submission
      e.preventDefault();
      // get user's input
      const input = document.getElementById("username");
      if (input.value == "") {
        username = "User";
      } else {
        username = input.value;
      }

      // set the username
      displayController.setUsername(username);
      displayCoordsForm();
    });
  }

  // Displays the getCoordsForm
  function displayCoordsForm() {
    // clear main
    const main = document.getElementById("main");
    main.innerHTML = "";
    // display the coords form
    main.appendChild(coordsForm.form);
    // set event listener for coords form submit button
    setCoordFormListeners();
  }

  // Helper function for setNameFormListener() that sets event listeners on the coords form
  function setCoordFormListeners() {
    // Set listeners to validate carrier input
    coordsForm.validateCarrier();
    coordsForm.validateBattleship();
    coordsForm.validateDestroyer();
    coordsForm.validateSubmarine();
    coordsForm.validatePatrolBoat();
    // get coords submit
    const submitCoords = document.getElementById("submit-coords");
    submitCoords.addEventListener("click", function (e) {
      e.preventDefault();
      let aiCoords = coordsForm.getAiCoords();
      displayController.getUserShips();
      displayController.startGame(username, aiCoords);
    });
  }

  return {
    init: init,
    displayCoordsForm: displayCoordsForm,
    setUserName: setUserName
  };
}

export { gameLoop };
