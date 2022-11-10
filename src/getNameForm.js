function getNameForm() {
    // Get HTML elements
    const main = document.getElementById('main');


    // Build the username form and append it to the Main div
    function display() {
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
    
    return {
        display: display,
    }
}

export { getNameForm }