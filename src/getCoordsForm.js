function getCoordsForm() {

    // Initialise objects to store coord data for each ship
    let carrierData = {};
    let battleshipData = {};
    let destroyerData = {};
    let submarineData = {}
    let patrolData = {};

    let aiCarrierData = {};
    let aiBattleshipData = {};
    let aiDestroyerData = {};
    let aiSubmarineData = {}
    let aiPatrolData = {};

    // Builds the form and returns it as an HTML element
    function build() {
        // make outer container
        const container = document.createElement('div');
        container.setAttribute('id', 'get-coords-container');
        container.classList.add('form-container');
        // make form
        const formEl = document.createElement('form');
        formEl.setAttribute('id', 'get-coords-form');
        container.appendChild(formEl);
        // make legend
        const legend = document.createElement('legend');
        legend.innerText = 'Enter your ship coordinates';
        formEl.appendChild(legend);

        // CARRIER
        // make carrier div class 'form-control'
        const carrierFormControl = document.createElement('div');
        carrierFormControl.classList.add('form-control');
        formEl.appendChild(carrierFormControl);
        // make Carrier label
        const carrierlabel = document.createElement('label');
        carrierlabel.setAttribute('for', 'carrier');
        carrierlabel.innerText = 'Carrier:';
        carrierFormControl.appendChild(carrierlabel);
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
        // make Carrier input type text
        const carrierinput = document.createElement('input');
        carrierinput.setAttribute('type', 'text');
        carrierinput.setAttribute('name', 'carrier');
        carrierinput.setAttribute('id', 'carrier');
        carrierinput.setAttribute('placeholder', '0,0');
        carrierFormControl.appendChild(carrierinput);
        // make carrier error span
        let errorFormControl = document.createElement('div');
        errorFormControl.classList.add('form-control');
        formEl.appendChild(errorFormControl);
        const carrierError = document.createElement('span');
        carrierError.classList.add('error');
        carrierError.setAttribute('id', 'carrier-error');
        carrierError.setAttribute('aria-live', 'polite');
        errorFormControl.appendChild(carrierError);

        // BATTLESHIP
        // make battleship div class 'form-control'
        const battleshipFormControl = document.createElement('div');
        battleshipFormControl.classList.add('form-control');
        battleshipFormControl.classList.add('disabled');
        formEl.appendChild(battleshipFormControl);
        // make battleship label
        const battleshiplabel = document.createElement('label');
        battleshiplabel.setAttribute('for', 'battleship');
        battleshiplabel.innerText = 'Battleship:';
        battleshipFormControl.appendChild(battleshiplabel);
        // make battleship radios
        const battleshipRadioContainer = document.createElement('div');
        battleshipRadioContainer.classList.add('radio-container');
        battleshipFormControl.appendChild(battleshipRadioContainer);
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
        // make battleship input type text
        const battleshipinput = document.createElement('input');
        battleshipinput.setAttribute('type', 'text');
        battleshipinput.setAttribute('name', 'battleship');
        battleshipinput.setAttribute('id', 'battleship');
        battleshipinput.setAttribute('placeholder', '0,0');
        battleshipFormControl.appendChild(battleshipinput);
        // make battleship error span
        let errorFormControl2 = document.createElement('div');
        errorFormControl2.classList.add('form-control');
        formEl.appendChild(errorFormControl2);
        const battleshipError = document.createElement('span');
        battleshipError.classList.add('error');
        battleshipError.setAttribute('id', 'battleship-error');
        battleshipError.setAttribute('aria-live', 'polite');
        errorFormControl2.appendChild(battleshipError);

        // DESTROYER
        // make destroyer div class 'form-control'
        const destroyerFormControl = document.createElement('div');
        destroyerFormControl.classList.add('form-control');
        destroyerFormControl.classList.add('disabled');
        formEl.appendChild(destroyerFormControl);
        // make destroyer label
        const destroyerlabel = document.createElement('label');
        destroyerlabel.setAttribute('for', 'destroyer');
        destroyerlabel.innerText = 'Destroyer:';
        destroyerFormControl.appendChild(destroyerlabel);
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
        // make destroyer input type text
        const destroyerinput = document.createElement('input');
        destroyerinput.setAttribute('type', 'text');
        destroyerinput.setAttribute('name', 'destroyer');
        destroyerinput.setAttribute('id', 'destroyer');
        destroyerinput.setAttribute('placeholder', '0,0');
        destroyerFormControl.appendChild(destroyerinput);
        // make destroyer error span
        let errorFormControl3 = document.createElement('div');
        errorFormControl3.classList.add('form-control');
        formEl.appendChild(errorFormControl3);
        const destroyerError = document.createElement('span');
        destroyerError.classList.add('error');
        destroyerError.setAttribute('id', 'destroyer-error');
        destroyerError.setAttribute('aria-live', 'polite');
        errorFormControl3.appendChild(destroyerError);
        
        // SUBMARINE
        // make submarine div class 'form-control'
        const submarineFormControl = document.createElement('div');
        submarineFormControl.classList.add('form-control');
        submarineFormControl.classList.add('disabled');
        formEl.appendChild(submarineFormControl);
        // make submarine label
        const submarinelabel = document.createElement('label');
        submarinelabel.setAttribute('for', 'submarine');
        submarinelabel.innerText = 'Submarine:';
        submarineFormControl.appendChild(submarinelabel);
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
        // make submarine input type text
        const submarineinput = document.createElement('input');
        submarineinput.setAttribute('type', 'text');
        submarineinput.setAttribute('name', 'submarine');
        submarineinput.setAttribute('id', 'submarine');
        submarineinput.setAttribute('placeholder', '0,0');
        submarineFormControl.appendChild(submarineinput);
        // make submarine error span
        let errorFormControl4 = document.createElement('div');
        errorFormControl4.classList.add('form-control');
        formEl.appendChild(errorFormControl4);
        const submarineError = document.createElement('span');
        submarineError.classList.add('error');
        submarineError.setAttribute('id', 'submarine-error');
        submarineError.setAttribute('aria-live', 'polite');
        errorFormControl4.appendChild(submarineError);

        // PATROL BOAT
        // make patrol div class 'form-control'
        const patrolFormControl = document.createElement('div');
        patrolFormControl.classList.add('form-control');
        patrolFormControl.classList.add('disabled');
        formEl.appendChild(patrolFormControl);
        // make patrol label
        const patrollabel = document.createElement('label');
        patrollabel.setAttribute('for', 'patrol');
        patrollabel.innerText = 'Patrol boat:';
        patrolFormControl.appendChild(patrollabel);
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
        // make patrol input type text
        const patrolinput = document.createElement('input');
        patrolinput.setAttribute('type', 'text');
        patrolinput.setAttribute('name', 'patrol');
        patrolinput.setAttribute('id', 'patrol');
        patrolinput.setAttribute('placeholder', '0,0');
        patrolFormControl.appendChild(patrolinput);
        // make patrol error span
        let errorFormControl5 = document.createElement('div');
        errorFormControl5.classList.add('form-control');
        formEl.appendChild(errorFormControl5);
        const patrolError = document.createElement('span');
        patrolError.classList.add('error');
        patrolError.setAttribute('id', 'patrol-error');
        patrolError.setAttribute('aria-live', 'polite');
        errorFormControl5.appendChild(patrolError);

        //SUBMIT
        // make submit div class 'form-control'
        const submitFormControl = document.createElement('div');
        submitFormControl.classList.add('form-control');
        formEl.appendChild(submitFormControl);
        // make submit btn
        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submit-coords');
        submit.setAttribute('value', 'Play');
        submitFormControl.appendChild(submit);

        // set disableds
        battleshipRadioHor.disabled = true;
        battleshipRadioVer.disabled = true;
        battleshipinput.disabled = true;

        destroyerRadioHor.disabled = true;
        destroyerRadioVer.disabled = true;
        destroyerinput.disabled = true;

        submarineRadioHor.disabled = true;
        submarineRadioVer.disabled = true;
        submarineinput.disabled = true;

        patrolRadioHor.disabled = true;
        patrolRadioVer.disabled = true;
        patrolinput.disabled = true;
        return container;
    }

    // Returns a random orientation
    function randomOri() {
        let ori;
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            ori = 'horizontal';
        } else {
            ori = 'vertical';
        }
        return ori;

    }

    // Returns random coords as a string
    function randomCoords() {
        let coords = '';
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        coords = row.toString() + ',' + col.toString();
        return coords
    }

    // Gets ai coords for carrier and validates them
    function aiCarrierCoords(coord) {
        // get a random coord for carrier
        let ori = randomOri();
        let rowRegex = /[0-5]\W\d/gm;
        let colRegex = /\d\W[0-5]/gm;
        let match;
        // If the ori horizontal
        if (ori == 'horizontal') {
            // check the input is valid against the colRegex
            match = validate(coord, colRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiCarrierData);
                return aiCarrierData;
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiCarrierCoords(newcoord);
            }
        // If the ori is vertical 
        } else if (ori == 'vertical') {
            match = validate(coord, rowRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiCarrierData);
                return aiCarrierData;
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiCarrierCoords(newcoord);
            }
    }};

    // Gets ai coords for battleship and validates them
    function aiBattleshipCoords(coord) {
        // get a random coord for carrier
        let ori = randomOri();
        let rowRegex = /[0-6]\W\d/gm;
        let colRegex = /\d\W[0-6]/gm;
        let match;
        // If the ori horizontal
        if (ori == 'horizontal') {
            // check the input is valid against the colRegex
            match = validate(coord, colRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiBattleshipData);
                // Compare with carrierData
                let valid = compareData(aiBattleshipData, aiCarrierData);
                if (valid == true) {
                    saveData(coord, ori, aiBattleshipData);
                    return aiBattleshipData
                } else if (valid == false) {
                    let newcoord = randomCoords();
                    aiBattleshipCoords(newcoord);
                }
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiBattleshipCoords(newcoord);
            }
        // If the ori is vertical 
        } else if (ori == 'vertical') {
            match = validate(coord, rowRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiBattleshipData);
                // Compare with carrierData
                let valid = compareData(aiBattleshipData, aiCarrierData);
                if (valid == true) {
                    saveData(coord, ori, aiBattleshipData);
                    return aiBattleshipData;
                } else if (valid == false) {
                    let newcoord = randomCoords();
                    aiBattleshipCoords(newcoord);
                }
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiBattleshipCoords(newcoord);
            }
        }
    }

    // Gets ai coords for destroyer and validates them
    function aiDestroyerCoords(coord) {
        // get a random coord for carrier
        let ori = randomOri();
        let rowRegex = /[0-7]\W\d/gm;
        let colRegex = /\d\W[0-7]/gm;
        let match;
        // If the ori horizontal
        if (ori == 'horizontal') {
            // check the input is valid against the colRegex
            match = validate(coord, colRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiDestroyerData);
                // Compare with carrierData & batleshipData
                let valid = compareData(aiDestroyerData, aiCarrierData);
                let valid2 = compareData(aiDestroyerData, aiBattleshipData);
                if (valid == true && valid2 == true) {
                    saveData(coord, ori, aiDestroyerData);
                    return aiDestroyerData
                } else if (valid == false || valid2 == false) {
                    let newcoord = randomCoords();
                    aiDestroyerCoords(newcoord);
                }
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiDestroyerCoords(newcoord);
            }
        // If the ori is vertical 
        } else if (ori == 'vertical') {
            match = validate(coord, rowRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiDestroyerData);
                // Compare with carrierData & batleshipData
                let valid = compareData(aiDestroyerData, aiCarrierData);
                let valid2 = compareData(aiDestroyerData, aiBattleshipData);
                if (valid == true && valid2 == true) {
                    saveData(coord, ori, aiDestroyerData);
                    return aiDestroyerData
                } else if (valid == false || valid2 == false) {
                    let newcoord = randomCoords();
                    aiDestroyerCoords(newcoord);
                }
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiDestroyerCoords(newcoord);
            }
        }
    }

    // Gets ai coords for submarine and validates them
    function aiSubmarineCoords(coord) {
        // get a random coord for carrier
        let ori = randomOri();
        let rowRegex = /[0-7]\W\d/gm;
        let colRegex = /\d\W[0-7]/gm;
        let match;
        // If the ori horizontal
        if (ori == 'horizontal') {
            // check the input is valid against the colRegex
            match = validate(coord, colRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiSubmarineData);
                // Compare with carrierData & batleshipData & destroyerData
                let valid = compareData(aiSubmarineData, aiCarrierData);
                let valid2 = compareData(aiSubmarineData, aiBattleshipData);
                let valid3 = compareData(aiSubmarineData, aiDestroyerData);
                if (valid == true && valid2 == true && valid3 == true) {
                    saveData(coord, ori, aiSubmarineData);
                    return aiSubmarineData;
                } else if (valid == false || valid2 == false || valid3 == false) {
                    let newcoord = randomCoords();
                    aiSubmarineCoords(newcoord);
                }
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiSubmarineCoords(newcoord);
            }
        // If the ori is vertical 
        } else if (ori == 'vertical') {
            match = validate(coord, rowRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiSubmarineData);
                // Compare with carrierData & batleshipData & destroyerData
                let valid = compareData(aiSubmarineData, aiCarrierData);
                let valid2 = compareData(aiSubmarineData, aiBattleshipData);
                let valid3 = compareData(aiSubmarineData, aiDestroyerData);
                if (valid == true && valid2 == true && valid3 == true) {
                    saveData(coord, ori, aiSubmarineData);
                    return aiSubmarineData
                } else if (valid == false || valid2 == false || valid3 == false) {
                    let newcoord = randomCoords();
                    aiSubmarineCoords(newcoord);
                }
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiSubmarineCoords(newcoord);
            }
        }
    }

    // Gets ai coords for patrol boat and validates them
    function aiPatrolCoords(coord) {
        // get a random coord for carrier
        let ori = randomOri();
        let rowRegex = /[0-8]\W\d/gm;
        let colRegex = /\d\W[0-8]/gm;
        let match;
        // If the ori horizontal
        if (ori == 'horizontal') {
            // check the input is valid against the colRegex
            match = validate(coord, colRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiPatrolData);
                // Compare with carrierData & batleshipData & destroyerData
                let valid = compareData(aiPatrolData, aiCarrierData);
                let valid2 = compareData(aiPatrolData, aiBattleshipData);
                let valid3 = compareData(aiPatrolData, aiDestroyerData);
                let valid4 = compareData(aiPatrolData, aiSubmarineData);
                if (valid == true && valid2 == true && valid3 == true && valid4 == true) {
                    saveData(coord, ori, aiPatrolData);
                    return aiPatrolData
                } else if (valid == false || valid2 == false || valid3 == false || valid4 == false) {
                    let newcoord = randomCoords();
                    aiPatrolCoords(newcoord);
                }
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiPatrolCoords(newcoord);
            }
        // If the ori is vertical 
        } else if (ori == 'vertical') {
            match = validate(coord, rowRegex);
            // Base case:
            // If match is true, the input is valid
            if (match === true) {
                // so save the data
                saveData(coord, ori, aiPatrolData);
                // Compare with carrierData & batleshipData & destroyerData
                let valid = compareData(aiPatrolData, aiCarrierData);
                let valid2 = compareData(aiPatrolData, aiBattleshipData);
                let valid3 = compareData(aiPatrolData, aiDestroyerData);
                let valid4 = compareData(aiPatrolData, aiSubmarineData);
                if (valid == true && valid2 == true && valid3 == true && valid4 == true) {
                    saveData(coord, ori, aiPatrolData);
                    return aiPatrolData
                } else if (valid == false || valid2 == false || valid3 == false || valid4 == false) {
                    let newcoord = randomCoords();
                    aiPatrolCoords(newcoord);
                }
            // If match is false, the input is invalid
            } else {
                // Recursively call this function with new coords
                let newcoord = randomCoords();
                aiPatrolCoords(newcoord);
            }
        }
    }

    // Validates the carrier input using regex
    function validateCarrier() {

        // get the inputs from the DOM
        const carrierinput = document.getElementById('carrier');
        const carrierRadioHor = document.getElementById('carrier-horizontal');
        const carrierRadioVer = document.getElementById('carrier-vertical');
        const carrierError = document.getElementById('carrier-error');

        // validate carrier input
        carrierinput.addEventListener('input', function() {
            let string = carrierinput.value;
            let rowRegex = /[0-5]\W\d/gm;
            let colRegex = /\d\W[0-5]/gm;
            let match;
            // If the input is 3 chars
            if (string.length === 3) {
                // If the input is 3 chars and the horizontal radio is checked
                if (carrierRadioHor.checked) {
                    let ori = 'horizontal';
                    // check the input is valid against the colRegex
                    match = validate(string, colRegex);
                    // If match is false, the input is invalid
                    if (match === false) {
                        // so show an error
                        showError('carrier');
                    // If match is true, the input is valid
                    } else {
                        // If the input is valid: 
                        // Hide any errors
                        carrierError.textContent = 'Click here for next ship';
                        carrierError.className = 'error green active';
                        saveData(string, ori, carrierData);
                        carrierError.addEventListener('click', function() {
                            goNextInput(carrierError);
                        });
                    }
                // If the input is 3 chars and the vertical radio is checked
                } else if (carrierRadioVer.checked) {
                    let ori = 'vertical';
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('carrier');
                    } else {
                        carrierError.textContent = 'Click here for next ship';
                        carrierError.className = 'error green active';
                        saveData(string, ori, carrierData);
                        carrierError.addEventListener('click', function() {
                            goNextInput(carrierError);
                        });
                    }
                }
            // If the input is less than 3 chars, remove errors and don't validate
            } else if (string.length < 3) {
                carrierError.textContent = '';
                carrierError.className = 'error';
            // If the input is more than 3 chars, show error
            } else {
                showError('carrier');
                carrierError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        carrierRadioHor.addEventListener('click', function() {
            let string = carrierinput.value;
            let match;
            let colRegex = /\d\W[0-5]/gm;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('carrier');
                    } else {
                        carrierError.textContent = 'Click here for next ship';
                        carrierError.className = 'error green active';
                        saveData(string, 'horizontal', carrierData);
                        carrierError.addEventListener('click', function() {
                            goNextInput(carrierError);
                        });
                    }
            }
        });

        carrierRadioVer.addEventListener('click', function() {
            let string = carrierinput.value;
            let match;
            let rowRegex = /[0-5]\W\d/gm;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('carrier');
                    } else {
                        carrierError.textContent = 'Click here for next ship';
                        carrierError.className = 'error green active';
                        saveData(string, 'vertical', carrierData);
                        carrierError.addEventListener('click', function() {
                            goNextInput(carrierError);
                        });
                    }
            }
        });
    }

    // Validates the battleship input using regex
    function validateBattleship() {
        // Get the HTML elements from the DOM
        // get the inputs from the DOM
        const battleshipinput = document.getElementById('battleship');
        const battleshipRadioHor = document.getElementById('battleship-horizontal');
        const battleshipRadioVer = document.getElementById('battleship-vertical');
        const battleshipError = document.getElementById('battleship-error');

        // Validate
        battleshipinput.addEventListener('input', function() {
            // initialise vars
            let string = battleshipinput.value;
            let rowRegex = /[0-6]\W\d/g;
            let colRegex = /\d\W[0-6]/g;
            let match;

            if (string.length === 3) {
                if (battleshipRadioHor.checked) {
                    let ori = 'horizontal';
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {

                        // save the data provided
                        saveData(string, ori, battleshipData);
                        // Compare with carrierData
                        let valid = compareData(battleshipData, carrierData);
                        console.log('Valid: ' + valid);
                        if (valid == true) {
                            //move on to the next
                            battleshipError.textContent = 'Click here for next ship';
                            battleshipError.className = 'error green active';
                            battleshipError.addEventListener('click', function() {
                                goNextInput(battleshipError);
                            });
                        } else if (valid == false) {
                            showError('battleship');
                        }
                    }
                    
                } else if (battleshipRadioVer.checked) {
                    let ori = 'vertical';
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {
                        // save the data provided
                        saveData(string, ori, battleshipData);
                        // Compare with carrierData
                        let valid = compareData(battleshipData, carrierData);
                        console.log('Valid: ' + valid);
                        if (valid == true) {
                            //move on to the next
                            battleshipError.textContent = 'Click here for next ship';
                            battleshipError.className = 'error green active';
                            battleshipError.addEventListener('click', function() {
                                goNextInput(battleshipError);
                            });
                        } else if (valid == false) {
                            showError('battleship');
                        }
                    }
                }
            } else if (string.length < 3) {
                battleshipError.textContent = '';
                battleshipError.className = 'error';
            } else {
                showError('battleship');
                battleshipError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        battleshipRadioHor.addEventListener('click', function() {
            let string = battleshipinput.value;
            let match;
            let colRegex = /\d\W[0-6]/g;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {
                        
                        saveData(string, 'horizontal', battleshipData);
                        // Compare with carrierData
                        let valid = compareData(battleshipData, carrierData);
                        console.log('Valid: ' + valid);
                        if (valid == true) {
                            //move on to the next
                            battleshipError.textContent = 'Click here for next ship';
                            battleshipError.className = 'error green active';
                            battleshipError.addEventListener('click', function() {
                                goNextInput(battleshipError);
                            });
                        } else if (valid == false) {
                            showError('battleship');
                        }
                    }
            }
        });

        battleshipRadioVer.addEventListener('click', function() {
            let string = battleshipinput.value;
            let match;
            let rowRegex = /[0-6]\W\d/g;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {
                        saveData(string, 'vertical', battleshipData);
                        // Compare with carrierData
                        let valid = compareData(battleshipData, carrierData);
                        console.log('Valid: ' + valid);
                        if (valid == true) {
                            //move on to the next
                            battleshipError.textContent = 'Click here for next ship';
                            battleshipError.className = 'error green active';
                            battleshipError.addEventListener('click', function() {
                                goNextInput(battleshipError);
                            });
                        } else if (valid == false) {
                            showError('battleship');
                        }
                    }
            }
        });
    }

    // Validates the destroyer input using regex
    function validateDestroyer() {

        // Get the HTML elements from the DOM
        const destroyerinput = document.getElementById('destroyer');
        const destroyerRadioHor = document.getElementById('destroyer-horizontal');
        const destroyerRadioVer = document.getElementById('destroyer-vertical');
        const destroyerError = document.getElementById('destroyer-error');

        destroyerinput.addEventListener('input', function() {
            // initialise vars
            let string = destroyerinput.value;
            let rowRegex = /[0-7]\W\d/g;
            let colRegex = /\d\W[0-7]/g;
            let match;

            if (string.length === 3) {
                if (destroyerRadioHor.checked) {
                    let ori = 'horizontal';
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        saveData(string, ori, destroyerData);
                        // Compare with carrierData & battleshipData
                        let valid = compareData(destroyerData, carrierData);
                        let valid2 = compareData(destroyerData, battleshipData);
                        if (valid == true && valid2 == true) {
                            //move on to the next
                            destroyerError.textContent = 'Click here for next ship';
                            destroyerError.className = 'error green active';
                            destroyerError.addEventListener('click', function() {
                                goNextInput(destroyerError);
                            });
                        } else if (valid == false || valid2 == false) {
                            showError('destroyer');
                        }
                    }
                    
                } else if (destroyerRadioVer.checked) {
                    let ori = 'vertical';
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        
                        saveData(string, ori, destroyerData);
                        // Compare with carrierData & battleshipData
                        let valid = compareData(destroyerData, carrierData);
                        let valid2 = compareData(destroyerData, battleshipData);
                        console.log('Valid vs carrier: ' + valid);
                        console.log('Valid vs battleship: ' + valid2);
                        if (valid == true && valid2 == true) {
                            //move on to the next
                            destroyerError.textContent = 'Click here for next ship';
                            destroyerError.className = 'error green active';
                            destroyerError.addEventListener('click', function() {
                                goNextInput(destroyerError);
                            });
                        } else if (valid == false || valid2 == false) {
                            showError('destroyer');
                        }
                    }
                }
            } else if (string.length < 3) {
                destroyerError.textContent = '';
                destroyerError.className = 'error';
            } else {
                showError('destroyer');
                destroyerError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        destroyerRadioHor.addEventListener('click', function() {
            let string = destroyerinput.value;
            let match;
            let colRegex = /\d\W[0-7]/g;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        
                        saveData(string, 'horizontal', destroyerData);
                        // Compare with carrierData & battleshipData
                        let valid = compareData(destroyerData, carrierData);
                        let valid2 = compareData(destroyerData, battleshipData);
                        console.log('Valid vs carrier: ' + valid);
                        console.log('Valid vs battleship: ' + valid2);
                        if (valid == true && valid2 == true) {
                            //move on to the next
                            destroyerError.textContent = 'Click here for next ship';
                            destroyerError.className = 'error green active';
                            destroyerError.addEventListener('click', function() {
                                goNextInput(destroyerError);
                            });
                        } else if (valid == false || valid2 == false) {
                            showError('destroyer');
                        }
                    }
            }
        });

        destroyerRadioVer.addEventListener('click', function() {
            let string = destroyerinput.value;
            let match;
            let rowRegex = /[0-7]\W\d/g;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        saveData(string, 'vertical', destroyerData);
                        // Compare with carrierData & battleshipData
                        let valid = compareData(destroyerData, carrierData);
                        let valid2 = compareData(destroyerData, battleshipData);
                        console.log('Valid vs carrier: ' + valid);
                        console.log('Valid vs battleship: ' + valid2);
                        if (valid == true && valid2 == true) {
                            //move on to the next
                            destroyerError.textContent = 'Click here for next ship';
                            destroyerError.className = 'error green active';
                            destroyerError.addEventListener('click', function() {
                                goNextInput(destroyerError);
                            });
                        } else if (valid == false || valid2 == false) {
                            showError('destroyer');
                        }
                    }
            }
        });

    }

    // Validates the submarine input using regex
    function validateSubmarine() {

        // Get the HTML elements from the DOM
        const submarineinput = document.getElementById('submarine');
        const submarineRadioHor = document.getElementById('submarine-horizontal');
        const submarineRadioVer = document.getElementById('submarine-vertical');
        const submarineError = document.getElementById('submarine-error');

        // validate submarine input
        submarineinput.addEventListener('input', function() {
            // initialise vars
            let string = submarineinput.value;
            let rowRegex = /[0-7]\W\d/g;
            let colRegex = /\d\W[0-7]/g;
            let match;

            if (string.length === 3) {
                if (submarineRadioHor.checked) {
                    let ori = 'horizontal';
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        // Save the data
                        saveData(string, ori, submarineData);
                        // Compare with carrierData & battleshipData & destroyerData
                        let valid = compareData(submarineData, carrierData);
                        let valid2 = compareData(submarineData, battleshipData);
                        let valid3 = compareData(submarineData, destroyerData)
                        if (valid == true && valid2 == true && valid3 == true) {
                            //move on to the next
                            submarineError.textContent = 'Click here for next ship';
                            submarineError.className = 'error green active';
                            submarineError.addEventListener('click', function() {
                                goNextInput(submarineError);
                            });
                        } else if (valid == false || valid2 == false || valid3 == false) {
                            showError('submarine');
                        }
                    }
                    
                } else if (submarineRadioVer.checked) {
                    let ori = 'vertical';
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        // Save the data
                        saveData(string, ori, submarineData);
                        // Compare with carrierData & battleshipData & destroyerData
                        let valid = compareData(submarineData, carrierData);
                        let valid2 = compareData(submarineData, battleshipData);
                        let valid3 = compareData(submarineData, destroyerData)
                        if (valid == true && valid2 == true && valid3 == true) {
                            //move on to the next
                            submarineError.textContent = 'Click here for next ship';
                            submarineError.className = 'error green active';
                            submarineError.addEventListener('click', function() {
                                goNextInput(submarineError);
                            });
                        } else if (valid == false || valid2 == false || valid3 == false) {
                            showError('submarine');
                        }
                    }
                }
            } else if (string.length < 3) {
                submarineError.textContent = '';
                submarineError.className = 'error';
            } else {
                showError('submarine');
                submarineError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        submarineRadioHor.addEventListener('click', function() {
            let string = submarineinput.value;
            let match;
            let colRegex = /\d\W[0-7]/g;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        
                        saveData(string, 'horizontal', submarineData);
                        // Compare with carrierData & battleshipData & destroyerData
                        let valid = compareData(submarineData, carrierData);
                        let valid2 = compareData(submarineData, battleshipData);
                        let valid3 = compareData(submarineData, destroyerData)
                        if (valid == true && valid2 == true && valid3 == true) {
                            //move on to the next
                            submarineError.textContent = 'Click here for next ship';
                            submarineError.className = 'error green active';
                            submarineError.addEventListener('click', function() {
                                goNextInput(submarineError);
                            });
                        } else if (valid == false || valid2 == false || valid3 == false) {
                            showError('submarine');
                        }
                    }
            }
        });

        submarineRadioVer.addEventListener('click', function() {
            let string = submarineinput.value;
            let match;
            let rowRegex = /[0-7]\W\d/g;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        
                        saveData(string, 'vertical', submarineData);
                        // Compare with carrierData & battleshipData & destroyerData
                        let valid = compareData(submarineData, carrierData);
                        let valid2 = compareData(submarineData, battleshipData);
                        let valid3 = compareData(submarineData, destroyerData)
                        if (valid == true && valid2 == true && valid3 == true) {
                            //move on to the next
                            submarineError.textContent = 'Click here for next ship';
                            submarineError.className = 'error green active';
                            submarineError.addEventListener('click', function() {
                                goNextInput(submarineError);
                            });
                        } else if (valid == false || valid2 == false || valid3 == false) {
                            showError('submarine');
                        }
                    }
            }
        });


    };

    // Validates the patrol boat input using regex
    function validatePatrolBoat() {

        // Get the HTML elements from the DOM
        const patrolinput = document.getElementById('patrol');
        const patrolRadioHor = document.getElementById('patrol-horizontal');
        const patrolRadioVer = document.getElementById('patrol-vertical');
        const patrolError = document.getElementById('patrol-error');

        // validate patrol input
        patrolinput.addEventListener('input', function() {
            // initialise vars
            let string = patrolinput.value;
            let rowRegex = /[0-8]\W\d/g;
            let colRegex = /\d\W[0-8]/g;
            let match;

            if (string.length === 3) {
                if (patrolRadioHor.checked) {
                    let ori = 'horizontal';
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('patrol');
                    } else {
                        saveData(string, ori, patrolData);
                        // Compare with carrierData & battleshipData & destroyerData
                        let valid = compareData(patrolData, carrierData);
                        let valid2 = compareData(patrolData, battleshipData);
                        let valid3 = compareData(patrolData, destroyerData);
                        let valid4 = compareData(patrolData, submarineData)
                        if (valid == true && valid2 == true && valid3 == true && valid4 == true) {
                            //move on to the next
                            patrolError.textContent = 'Click \'Play\' to start';
                            patrolError.className = 'error green active';
                           
                        } else if (valid == false || valid2 == false || valid3 == false || valid4 == false) {
                            showError('patrol');
                        }
                    }
                    
                } else if (patrolRadioVer.checked) {
                    let ori = 'vertical';
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('patrol');
                    } else {
                        saveData(string, ori, patrolData);
                        // Compare with carrierData & battleshipData & destroyerData
                        let valid = compareData(patrolData, carrierData);
                        let valid2 = compareData(patrolData, battleshipData);
                        let valid3 = compareData(patrolData, destroyerData);
                        let valid4 = compareData(patrolData, submarineData)
                        if (valid == true && valid2 == true && valid3 == true && valid4 == true) {
                            //move on to the next
                            patrolError.textContent = 'Click \'Play\' to start';
                            patrolError.className = 'error green active';
                           
                        } else if (valid == false || valid2 == false || valid3 == false || valid4 == false) {
                            showError('patrol');
                        }
                    }
                }
            } else if (string.length < 3) {
                patrolError.textContent = '';
                patrolError.className = 'error';
            } else {
                showError('patrol');
                patrolError.textContent = 'Please enter coordinates e.g. 0,0';
            }
        });

        // radio checks
        patrolRadioHor.addEventListener('click', function() {
            let string = patrolinput.value;
            let match;
            let colRegex = /\d\W[0-8]/g;
            if (string.length >= 3) {
                match = validate(string, colRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        
                        saveData(string, 'horizontal', patrolData);
                        // Compare with carrierData & battleshipData & destroyerData
                        let valid = compareData(patrolData, carrierData);
                        let valid2 = compareData(patrolData, battleshipData);
                        let valid3 = compareData(patrolData, destroyerData);
                        let valid4 = compareData(patrolData, submarineData)
                        if (valid == true && valid2 == true && valid3 == true && valid4 == true) {
                            //move on to the next
                            patrolData.textContent = 'Click here for next ship';
                            patrolData.className = 'error green active';
                            patrolData.addEventListener('click', function() {
                                goNextInput(patrolData);
                            });
                        } else if (valid == false || valid2 == false || valid3 == false || valid4 == false) {
                            showError('patrol');
                        }
                    }
            }
        });

        patrolRadioVer.addEventListener('click', function() {
            let string = patrolinput.value;
            let match;
            let rowRegex = /[0-8]\W\d/g;
            if (string.length >= 3) {
                match = validate(string, rowRegex);
                    if (match === false) {
                        showError('patrol');
                    } else {
                        
                        saveData(string, 'vertical', patrolData);
                        // Compare with carrierData & battleshipData & destroyerData
                        let valid = compareData(patrolData, carrierData);
                        let valid2 = compareData(patrolData, battleshipData);
                        let valid3 = compareData(patrolData, destroyerData);
                        let valid4 = compareData(patrolData, submarineData)
                        if (valid == true && valid2 == true && valid3 == true && valid4 == true) {
                            //move on to the next
                            patrolData.textContent = 'Click here for next ship';
                            patrolData.className = 'error green active';
                            patrolData.addEventListener('click', function() {
                                goNextInput(patrolData);
                            });
                        } else if (valid == false || valid2 == false || valid3 == false || valid4 == false) {
                            showError('patrol');
                        }
                    }
            }
        });
    };

    // Private helper function for validateCarrier etc.
    // Takes a boat type and shows its form validation error
    function showError(type) {
        const carrierError = document.getElementById('carrier-error');
        const battleshipError = document.getElementById('battleship-error');
        const destroyerError = document.getElementById('destroyer-error');
        const submarineError = document.getElementById('submarine-error');
        const patrolError = document.getElementById('patrol-error');
        if (type === 'carrier') {
            carrierError.textContent = "It won't fit there";
            carrierError.className = 'error active';
        } else if (type === 'battleship') {
            battleshipError.textContent = "It won't fit there";
            battleshipError.className = 'error active';
        } else if (type === 'destroyer') {
            destroyerError.textContent = "It won't fit there";
            destroyerError.className = 'error active';
        } else if (type === 'submarine') {
            submarineError.textContent = "It won't fit there";
            submarineError.className = 'error active';
        } else if (type === 'patrol') {
            patrolError.textContent = "It won't fit there";
            patrolError.className = 'error active';
        }
        return
    };

    // Private helper function for validateCarrier etc.
    // Validates form inputs with regular expression
    function validate(string, regex) {
        return regex.test(string);
    };

    // Saves input data to ship data object
    function saveData(string, ori, object) {
        // Store the data in the object
        object.coord = string.split(',');
        object.ori = ori;
        object.squares = {};

        // Set the increment
        let increment;
        if (object === carrierData || object === aiCarrierData) {
            increment = 5;
        } else if (object === battleshipData || object === aiBattleshipData) {
            increment = 4;
        } else if (object === destroyerData || object === submarineData || object === aiDestroyerData || object === aiSubmarineData) {
            increment = 3;
        } else if (object === patrolData || object === aiPatrolData) {
            increment = 2;
        }

        if (ori === 'horizontal') {
            // Calculate the coords for carrierData.squares;
            for (let i = 0; i < increment; i++) {
                let coord = object.coord;
                let row = parseInt(coord[0]);
                let col = parseInt(coord[1]);
                object['squares'][i] = [row, (col + i)];
            }
        } else if (ori === 'vertical') {
            // Calculate the coords for carrierData.squares;
            for (let i = 0; i < increment; i++) {
                let coord = object.coord;
                let row = parseInt(coord[0]);
                let col = parseInt(coord[1]);
                object['squares'][i] = [(row + i), col];
            }
        }
        
    };

    // Compares the data between two objects
    // returns true if NO match found
    // returns false if any match found
    function compareData(obj1, obj2) {
        let valid = true;
        let newData = obj1;
        let oldData = obj2;
        let newDataSquares = newData.squares;
        let oldDataSquares = oldData.squares;
        for (const key in oldDataSquares) {
            let oldVal = oldDataSquares[key];
            for (const key in newDataSquares) {
                let newVal = newDataSquares[key];
                if (oldVal[0] === newVal[0] && oldVal[1] === newVal[1]) {
                    valid = false;
                    return valid;
                }
            }
        }
        return valid;
    };

    // Toggles a form element as disabled
    function toggleDisabled(el) {
        if (el.disabled) {
            el.disabled = false;
        } else if (!el.disabled) {
            el.disabled = true;
        }
    };

    // Toggles a class="disabled" on an element
    function toggleClassDisable(el) {
        if (el.classList.contains('disabled')) {
            el.classList.remove('disabled');
        } else if (!el.classList.contains('disabled')) {
            el.classList.add('disabled');
        }
    };

    function goNextInput(obj) {
        let currentFormControl = obj.parentElement.previousElementSibling;
        let nextFormControl = obj.parentElement.nextSibling;
        toggleClassDisable(currentFormControl);
        toggleClassDisable(nextFormControl);

        let currentchildren = currentFormControl.children;
        let currentinput = currentchildren[2];
        let currentradios = currentchildren[1].children;
        toggleDisabled(currentinput);
        toggleDisabled(currentradios[0]);
        toggleDisabled(currentradios[2]);

        obj.textContent = '';
        obj.className = 'error';

        let children = nextFormControl.children;
        let input = children[2];
        let radios = children[1].children;
        toggleDisabled(input);
        toggleDisabled(radios[0]);
        toggleDisabled(radios[2]);

        // DEBUG console logs
        console.log('Current form-control: ');
        console.log(currentFormControl);

        console.log('Next form-control: ');
        console.log(nextFormControl);
    };

    function getAiCoords() {
        let coord = randomCoords();
        aiCarrierCoords(coord);
        let coord2 = randomCoords();
        aiBattleshipCoords(coord2);
        let coord3 = randomCoords();
        aiDestroyerCoords(coord3);
        let coord4 = randomCoords();
        aiSubmarineCoords(coord4);
        let coord5 = randomCoords();
        aiPatrolCoords(coord5);
        let aiCoords = {
            carrier: aiCarrierData,
            battleship: aiBattleshipData,
            destroyer: aiDestroyerData,
            submarine: aiSubmarineData,
            patrol: aiPatrolData,
        }
        return aiCoords
    }

    return {
        form: build(),
        validateCarrier: validateCarrier,
        validateBattleship: validateBattleship,
        validateDestroyer: validateDestroyer,
        validateSubmarine: validateSubmarine,
        validatePatrolBoat: validatePatrolBoat,
        getAiCoords: getAiCoords,
    };
}

export { getCoordsForm };