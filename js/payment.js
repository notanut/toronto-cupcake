function toggleActive(button, id) {
    var buttons = document.querySelectorAll('.pay-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    button.classList.add('active');

    var divs = document.querySelectorAll('.payment')
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('none');
    }

    var div = document.getElementById(id)
    div.classList.remove('none')
}



const radioButtons = document.querySelectorAll('input[type="radio"]');


// Add click event listeners to each button
document.getElementById('bcaButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('briButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('gopayButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('gpayButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('ovoButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('kredivoButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('danaButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('shopeePayButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('bcavButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('mandiriButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('bniButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('brivButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('alfaButton').addEventListener('click', function() {
    handleRadioButton(this);
});
document.getElementById('indoButton').addEventListener('click', function() {
    handleRadioButton(this);
});

document.getElementById('krediButton').addEventListener('click', function() {
    handleRadioButton(this);
});
document.getElementById('atomeButton').addEventListener('click', function() {
    handleRadioButton(this);
});

// Function to handle radio button check
function handleRadioButton(button) {
    // Iterate through all radio buttons
    radioButtons.forEach(function(radioButton) {
        // Uncheck all radio buttons except for the one associated with the clicked button
        if (radioButton !== button.querySelector('input[type="radio"]')) {
            radioButton.checked = false;
        }
    });
    button.querySelector('input[type="radio"]').checked = true;
    var buttons = document.querySelectorAll('.pay')
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    button.classList.add('active');

    // Check the associated radio button
}
