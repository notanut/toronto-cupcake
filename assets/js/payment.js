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

document.getElementById('name').addEventListener('blur', () => {
    validateName()
})
document.getElementById('phone').addEventListener('blur', () => {
    validatePhone()
})
document.getElementById('address').addEventListener('blur', () => {
    validateAddress()
})

// document.getElementById('phone').addEventListener('input', () => {
//     this.value = this.value.replace(/\D/g, '');
// })

function validateName() {
    var name = document.getElementById('name').value
    var nameError = document.getElementById('nameError')

    if (!name) {
        nameError.textContent = 'Name is required'
    } else if (name.length < 5) {
        nameError.textContent = 'Name must be at least 5 characters'
    } else {
        nameError.textContent = ''
    }
}

function validatePhone() {
    var phone = document.getElementById('phone').value
    var phoneError = document.getElementById('phoneError')

    if (!phone) {
        phoneError.textContent = 'Phone number is required'
    } else if (!/^\d{10,12}$/.test(phone)) {
        phoneError.textContent = 'Phone number must be between 10 or 12 digits long'
    } else [
        phoneError.textContent = '',
    ]
}

function validateAddress() {
    var addr = document.getElementById('address').value
    var addrError = document.getElementById('addrError')

    if (!addr) {
        addrError.textContent = 'Address is required'
    } else if (addr.length < 10) {
        addrError.textContent = 'Address must be at least 10 characters'
    } else {
        addrError.textContent = ''
    }
}