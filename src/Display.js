import { Game } from "./Game";
import { gameLoop } from "./gameLoop";
import jasperwin from "./assets/paddlin.png";
import userwin from "./assets/jasper.png";

function Display() {
  // initialise variables
  const main = document.getElementById("main");
  let currentInput = [];
  let coords;
  let orients;
  let username;
  let game;

  // Removes all children from main
  function clearMain() {
    main.innerHTML = "";
  }

  // Shows form validation error
  function error(message) {
    const container = document.getElementById("container");
    const alert = document.createElement("div");
    const close = document.createElement("span");
    alert.classList.add("alert");
    alert.classList.add("alert-error");
    close.classList.add("close-alert");
    close.innerText = "✖";
    alert.innerText = message;
    close.addEventListener("click", function () {
      alert.classList.add("hidden");
      setTimeout(function () {
        alert.style.display = "none";
      }, 600);
    });
    alert.appendChild(close);
    container.appendChild(alert);
  }

  // sets username
  function setUsername(name) {
    return (username = name);
  }

  // gets username
  function getUsername() {
    return username;
  }

  // Prints a game board
  function printBoard(board) {
    // make outer container
    const outerdiv = document.createElement("div");
    if (board.owner.name == "Jasper") {
      outerdiv.setAttribute("id", "board-jasper");
    } else {
      outerdiv.setAttribute("id", "board-human");
    }
    main.appendChild(outerdiv);
    // make header
    const divheader = document.createElement("p");
    divheader.classList.add("board-header");
    divheader.innerText = board.owner.name + "'s board";
    outerdiv.appendChild(divheader);
    // make inner container
    const innerdiv = document.createElement("div");
    innerdiv.classList.add("board-container");
    outerdiv.appendChild(innerdiv);
    // make cells
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board[i].length; j++) {
        const cell = document.createElement("div");
        if (typeof board.board[i][j] == "object") {
          cell.classList.add("ship");
        } else {
          cell.classList.add(`cell-${[i]}-${board.board[i][j]}`);
        }
        cell.classList.add("cell");

        cell.classList.add("open");

        cell.classList.add("cell-" + board.owner.name);
        cell.setAttribute("data-coord", `${board.owner.name}-cell-${i}-${j}`);
        innerdiv.appendChild(cell);
      }
    }
  }

  // Gets the current user input
  function getInput() {
    return currentInput;
  }

  // Gets user's coords and orientations for placing their ships
  function getUserShips() {
    const carrierinput = document.getElementById("carrier");
    const carrierRadioHor = document.getElementById("carrier-horizontal");
    const carrierRadioVer = document.getElementById("carrier-vertical");
    const battleshipinput = document.getElementById("battleship");
    const battleshipRadioHor = document.getElementById("battleship-horizontal");
    const battleshipRadioVer = document.getElementById("battleship-vertical");
    const destroyerinput = document.getElementById("destroyer");
    const destroyerRadioHor = document.getElementById("destroyer-horizontal");
    const destroyerRadioVer = document.getElementById("destroyer-vertical");
    const submarineinput = document.getElementById("submarine");
    const submarineRadioHor = document.getElementById("submarine-horizontal");
    const submarineRadioVer = document.getElementById("submarine-vertical");
    const patrolinput = document.getElementById("patrol");
    const patrolRadioHor = document.getElementById("patrol-horizontal");
    const patrolRadioVer = document.getElementById("patrol-vertical");
    // get coords
    let carrier = carrierinput.value.split(",");
    let battleship = battleshipinput.value.split(",");
    let destroyer = destroyerinput.value.split(",");
    let submarine = submarineinput.value.split(",");
    let patrolBoat = patrolinput.value.split(",");
    let thesecoords = {
      carrier: carrier,
      battleship: battleship,
      destroyer: destroyer,
      submarine: submarine,
      patrolBoat: patrolBoat
    };
    setUserShips(thesecoords);
    // get orientations
    let carrierOrient;
    let battleshipOrient;
    let destroyerOrient;
    let submarineOrient;
    let patrolOrient;
    // carrier
    if (carrierRadioHor.checked) {
      carrierOrient = "horizontal";
    } else if (carrierRadioVer.checked) {
      carrierOrient = "vertical";
    }
    // battleship
    if (battleshipRadioHor.checked) {
      battleshipOrient = "horizontal";
    } else if (battleshipRadioVer.checked) {
      battleshipOrient = "vertical";
    }
    // destroyer
    if (destroyerRadioHor.checked) {
      destroyerOrient = "horizontal";
    } else if (destroyerRadioVer.checked) {
      destroyerOrient = "vertical";
    }
    // submarine
    if (submarineRadioHor.checked) {
      submarineOrient = "horizontal";
    } else if (submarineRadioVer.checked) {
      submarineOrient = "vertical";
    }
    // patrol
    if (patrolRadioHor.checked) {
      patrolOrient = "horizontal";
    } else if (patrolRadioVer.checked) {
      patrolOrient = "vertical";
    }
    let orientations = {
      carrierOrient: carrierOrient,
      battleshipOrient: battleshipOrient,
      destroyerOrient: destroyerOrient,
      submarineOrient: submarineOrient,
      patrolOrient: patrolOrient
    };
    setUserShipOrients(orientations);
    let orients = getUserOrients();
    let coords = getUserCoords();
    if (coords === undefined) {
      let message = "Error: not all coordinates provided";
      error(message);
      return message;
    }
    for (const key in coords) {
      let value = coords[key];
      if (value === undefined) {
        let message = "Error: not all coordinates provided";
        error(message);
        return message;
      }
    }
    for (const key in orients) {
      let value = orients[key];
      if (value === undefined) {
        let message = "Error: not all orientations provided";
        error(message);
        return message;
      }
    }
    main.innerHTML = "";
  }

  // Sets the user ship coords
  function setUserShips(obj) {
    for (const key in obj) {
      let value = obj[key];
      if (value == "") {
        let message = "Error: not all coordinates provided";
        return message;
      }
    }
    return (coords = {
      userCarrier: Object.values(obj)[0],
      userBattleship: Object.values(obj)[1],
      userDestroyer: Object.values(obj)[2],
      userSubmarine: Object.values(obj)[3],
      userPatrolBoat: Object.values(obj)[4]
    });
  }

  // Gets user's ship coords
  function getUserCoords() {
    return coords;
  }

  // Sets user's ship orientations
  function setUserShipOrients(obj) {
    for (const key in obj) {
      let value = obj[key];

      if (value == "") {
        let message = "Error: not all orientations provided";

        return message;
      }
    }

    return (orients = {
      userCarrierOrient: Object.values(obj)[0],
      userBattleshipOrient: Object.values(obj)[1],
      userDestroyerOrient: Object.values(obj)[2],
      userSubmarineOrient: Object.values(obj)[3],
      userPatrolBoatOrient: Object.values(obj)[4]
    });
  }

  // Gets user ship orientations
  function getUserOrients() {
    return orients;
  }

  // Displays the comment to the screen
  function displayComment() {
    const header = document.querySelector("header");
    const commentContainer = document.createElement("aside");
    commentContainer.setAttribute("id", "comment-container");
    header.insertAdjacentElement("afterend", commentContainer);
  }

  // Updates the contents of the comment
  function updateComment(message) {
    const commentContainer = document.getElementById("comment-container");
    commentContainer.innerHTML = "";
    const comment = document.createElement("p");
    comment.setAttribute("id", "comment");
    comment.innerText = message;
    commentContainer.appendChild(comment);
  }

  // Appends new content to the end of the comment
  function appendComment(message) {
    const commentContainer = document.getElementById("comment-container");
    const commentChild = document.createElement("p");
    commentChild.innerText = message;
    commentContainer.appendChild(commentChild);
  }

  // Appends new content to the end of the same line of comment
  function appendInlineComment(message) {
    const comment = document.getElementById("comment");
    comment.innerText += " " + message;
  }

  // Starts the game
  function startGame(name, aiCoords) {
    game = new Game(name);
    // Append the comment container
    displayComment();
    let message = game.humanBoard.owner.name + "'s turn";
    updateComment(message);
    let append = "Click a square to attack";
    updateComment(append);
    // Print the boards
    printBoard(game.humanBoard);
    printBoard(game.AiBoard);
    // Populate the boards
    let coords = getUserCoords();
    let orients = getUserOrients();
    let aiData = aiCoords;
    let aiShipCoords = {
      carrier: aiData["carrier"]["coord"],
      battleship: aiData["battleship"]["coord"],
      destroyer: aiData["destroyer"]["coord"],
      submarine: aiData["submarine"]["coord"],
      patrol: aiData["patrol"]["coord"]
    };
    let aiOrients = {
      carrierOrient: aiData["carrier"]["ori"],
      battleshipOrient: aiData["battleship"]["ori"],
      destroyerOrient: aiData["destroyer"]["ori"],
      submarineOrient: aiData["submarine"]["ori"],
      patrolOrient: aiData["patrol"]["ori"]
    };
    game.populateHumanBoard(game.humanBoard, coords, orients);
    game.populateAiBoard(game.AiBoard, aiShipCoords, aiOrients);
    // Add event listeners for AI's board's cells
    let query = ".cell-" + game.AiBoard.owner.name;
    const cells = document.querySelectorAll(query);
    cells.forEach((cell) => {
      cell.addEventListener("click", handleEvent);
    });
    // Once gameOver is true, end and return winner
    return game.winner;
  }

  // On click event handler for AI board's cells
  function handleEvent() {
    // Remove 'open' class from this cell
    if (this.classList.contains("open")) {
      this.classList.remove("open");
    }
    // Get user's input
    let input = [];
    // save the input that was clicked 'Jasper-cell-2-2'
    let coordString = this.getAttribute("data-coord").slice(12); // '2-2'
    input = coordString.split("-");
    currentInput = input;
    // call game.playRound(currentInput);
    game.playRound(currentInput);
  }

  // Displays the winner screen
  function endGame(winner, humanPlayer) {
    const aside = document.querySelector("aside");
    aside.innerHTML = "";
    main.innerHTML = "";
    let msg;
    let message;
    let img = document.createElement("img");
    if (winner == "Jasper") {
      msg = "Jasper wins!";
      message = "Jasper says, \"That's a paddlin'.\"";
      img.src = jasperwin;
    } else {
      msg = winner + " wins!";
      message = 'Jasper says, "Oh, well. Easy come, easy go.';
      img.src = userwin;
    }
    let p1 = document.createElement("p");
    p1.innerText = msg;
    let p2 = document.createElement("p");
    p2.innerText = message;
    let button = document.createElement("button");
    button.innerText = "Play again";
    button.addEventListener("click", function () {
      playAgain(humanPlayer.name);
    });
    aside.appendChild(p1);
    aside.appendChild(img);
    aside.appendChild(p2);
    aside.appendChild(button);
  }

  // Begins a new game with the same username
  function playAgain(name) {
    let gameloop = new gameLoop();
    const container = document.getElementById("container");
    const aside = document.querySelector("aside");
    container.removeChild(aside);
    setUsername(name);
    gameloop.setUserName(name);
    gameloop.displayCoordsForm();
  }

  return {
    game: game,
    coords: coords,
    orients: orients,
    startGame: startGame,
    clearMain: clearMain,
    getUsername: getUsername,
    setUsername: setUsername,
    printBoard: printBoard,
    getInput: getInput,
    getUserShips: getUserShips,
    updateComment: updateComment,
    appendComment: appendComment,
    appendInlineComment: appendInlineComment,
    endGame: endGame
  };
}

export { Display };
