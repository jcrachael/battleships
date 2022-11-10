function getCoordsForm() {
    const main = document.getElementById('main');

    function display() {
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
        carrierinput.setAttribute('placeholder', '0, 0');
        carrierFormControl.appendChild(carrierinput);

        // make carrier error span
        let errorFormControl = document.createElement('div');
        errorFormControl.classList.add('form-control');
        form.appendChild(errorFormControl);

        const carrierError = document.createElement('span');
        carrierError.classList.add('error');
        carrierError.setAttribute('id', 'carrier-error');
        carrierError.setAttribute('aria-live', 'polite');
        errorFormControl.appendChild(carrierError);

        // validate carrier input
        carrierinput.addEventListener('input', function() {
            // initialise vars
            let string = carrierinput.value;
            let rowRegex = /[0-5]\W\d/gm;
            let colRegex = /\d\W[0-5]/gm;
            let match;

            if (string.length === 3) {
                if (carrierRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('carrier');
                    } else {
                        carrierError.textContent = '';
                        carrierError.className = 'error';
                    }
                    
                } else if (carrierRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('carrier');
                    } else {
                        carrierError.textContent = '';
                        carrierError.className = 'error';
                    }
                }
            } else if (string.length < 3) {
                carrierError.textContent = '';
                carrierError.className = 'error';
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
                        carrierError.textContent = '';
                        carrierError.className = 'error';
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
                        carrierError.textContent = '';
                        carrierError.className = 'error';
                    }
            }
        });


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

        // make battleship input type text
        const battleshipinput = document.createElement('input');
        battleshipinput.setAttribute('type', 'text');
        battleshipinput.setAttribute('name', 'battleship');
        battleshipinput.setAttribute('id', 'battleship');
        battleshipinput.setAttribute('placeholder', '0, 0');
        battleshipFormControl.appendChild(battleshipinput);

        // make battleship error span
        let errorFormControl2 = document.createElement('div');
        errorFormControl2.classList.add('form-control');
        form.appendChild(errorFormControl2);

        const battleshipError = document.createElement('span');
        battleshipError.classList.add('error');
        battleshipError.setAttribute('id', 'battleship-error');
        battleshipError.setAttribute('aria-live', 'polite');
        errorFormControl2.appendChild(battleshipError);

        // validate battleship input
                
        battleshipinput.addEventListener('input', function() {
            // initialise vars
            let string = battleshipinput.value;
            let rowRegex = /[0-6]\W\d/g;
            let colRegex = /\d\W[0-6]/g;
            let match;

            if (string.length === 3) {
                if (battleshipRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {
                        battleshipError.textContent = '';
                        battleshipError.className = 'error';
                    }
                    
                } else if (battleshipRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('battleship');
                    } else {
                        battleshipError.textContent = '';
                        battleshipError.className = 'error';
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
                        battleshipError.textContent = '';
                        battleshipError.className = 'error';
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
                        battleshipError.textContent = '';
                        battleshipError.className = 'error';
                    }
            }
        });



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
        destroyerinput.setAttribute('placeholder', '0, 0');
        destroyerFormControl.appendChild(destroyerinput);

        // make destroyer error span
        let errorFormControl3 = document.createElement('div');
        errorFormControl3.classList.add('form-control');
        form.appendChild(errorFormControl3);

        const destroyerError = document.createElement('span');
        destroyerError.classList.add('error');
        destroyerError.setAttribute('id', 'destroyer-error');
        destroyerError.setAttribute('aria-live', 'polite');
        errorFormControl3.appendChild(destroyerError);

        // validate destroyer input
        destroyerinput.addEventListener('input', function() {
            // initialise vars
            let string = destroyerinput.value;
            let rowRegex = /[0-7]\W\d/g;
            let colRegex = /\d\W[0-7]/g;
            let match;

            if (string.length === 3) {
                if (destroyerRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        destroyerError.textContent = '';
                        destroyerError.className = 'error';
                    }
                    
                } else if (destroyerRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('destroyer');
                    } else {
                        destroyerError.textContent = '';
                        destroyerError.className = 'error';
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
                        destroyerError.textContent = '';
                        destroyerError.className = 'error';
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
                        destroyerError.textContent = '';
                        destroyerError.className = 'error';
                    }
            }
        });

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
        submarineinput.setAttribute('placeholder', '0, 0');
        submarineFormControl.appendChild(submarineinput);

        // make submarine error span
        let errorFormControl4 = document.createElement('div');
        errorFormControl4.classList.add('form-control');
        form.appendChild(errorFormControl4);

        const submarineError = document.createElement('span');
        submarineError.classList.add('error');
        submarineError.setAttribute('id', 'submarine-error');
        submarineError.setAttribute('aria-live', 'polite');
        errorFormControl4.appendChild(submarineError);

        // validate submarine input
        submarineinput.addEventListener('input', function() {
            // initialise vars
            let string = submarineinput.value;
            let rowRegex = /[0-7]\W\d/g;
            let colRegex = /\d\W[0-7]/g;
            let match;

            if (string.length === 3) {
                if (submarineRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        submarineError.textContent = '';
                        submarineError.className = 'error';
                    }
                    
                } else if (submarineRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('submarine');
                    } else {
                        submarineError.textContent = '';
                        submarineError.className = 'error';
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
                        submarineError.textContent = '';
                        submarineError.className = 'error';
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
                        submarineError.textContent = '';
                        submarineError.className = 'error';
                    }
            }
        });


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
        patrolinput.setAttribute('placeholder', '0, 0');
        patrolFormControl.appendChild(patrolinput);

        // make patrol error span
        let errorFormControl5 = document.createElement('div');
        errorFormControl5.classList.add('form-control');
        form.appendChild(errorFormControl5);

        const patrolError = document.createElement('span');
        patrolError.classList.add('error');
        patrolError.setAttribute('id', 'patrol-error');
        patrolError.setAttribute('aria-live', 'polite');
        errorFormControl5.appendChild(patrolError);

         // validate patrol input
         patrolinput.addEventListener('input', function() {
            // initialise vars
            let string = patrolinput.value;
            let rowRegex = /[0-8]\W\d/g;
            let colRegex = /\d\W[0-8]/g;
            let match;

            if (string.length === 3) {
                if (patrolRadioHor.checked) {
                    match = validate(string, colRegex);
                    if (match === false) {
                        showError('patrol');
                    } else {
                        patrolError.textContent = '';
                        patrolError.className = 'error';
                    }
                    
                } else if (patrolRadioVer.checked) {
                    match = validate(string, rowRegex);
                    if (match === false) {
                        showError('patrol');
                    } else {
                        patrolError.textContent = '';
                        patrolError.className = 'error';
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
                        patrolError.textContent = '';
                        patrolError.className = 'error';
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
                        patrolError.textContent = '';
                        patrolError.className = 'error';
                    }
            }
        });
        
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
    }

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
    }

    // Validates form inputs with regular expression
    function validate(string, regex) {
        return regex.test(string);
    }

    return {
        display: display,
    }
}

export { getCoordsForm };