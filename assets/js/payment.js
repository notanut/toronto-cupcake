
var checkName = false
var checkAddr = false
var checkPhone = false
var checkPayment = false
var submitOrderButton = document.getElementById('submit-order')

var checkNumCardDesk = false
var checkMonthCardDesk = false
var checkYearCardDesk = false
var checkCvvCardDesk = false

const radioButtons = document.querySelectorAll('input[type="radio"]')

function toggleActive(button, id) {
    var buttons = document.querySelectorAll('.pay-btn')
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }
    button.classList.add('active')

    var divs = document.querySelectorAll('.payment')
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('none')
    }

    var div = document.getElementById(id)
    div.classList.remove('none')

    if (button.id === 'card') {
        radioButtons.forEach(function(radioButton) {
            if (radioButton !== button.querySelector('input[type="radio"]')) {
                radioButton.checked = false
            }
        })
        var buttons = document.querySelectorAll('.pay')
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active')
        }
        checkPayment = false
        checkInputsDesk()
    }
}

// Add click event listeners to each button
document.getElementById('bcaButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('briButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('gopayButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('gpayButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('ovoButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('kredivoButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('danaButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('shopeePayButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('bcavButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('mandiriButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('bniButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('brivButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('alfaButton').addEventListener('click', function() {
    handleRadioButton(this)
})
document.getElementById('indoButton').addEventListener('click', function() {
    handleRadioButton(this)
})

document.getElementById('krediButton').addEventListener('click', function() {
    handleRadioButton(this)
})
document.getElementById('atomeButton').addEventListener('click', function() {
    handleRadioButton(this)
})


// Function to handle radio button check
function handleRadioButton(button) {
    radioButtons.forEach(function(radioButton) {
        if (radioButton !== button.querySelector('input[type="radio"]')) {
            radioButton.checked = false
        }
    })
    button.querySelector('input[type="radio"]').checked = true
    var buttons = document.querySelectorAll('.pay')
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }
    button.classList.add('active')
    checkPayment = true
    checkSubmitOrder()
}

document.getElementById('name').addEventListener('input', () => {
    validateName()
    
})
document.getElementById('phone').addEventListener('input', () => {
    validatePhone()
    // checkInputsDesk()
})
document.getElementById('address').addEventListener('input', () => {
    validateAddress()
    // checkInputsDesk()
})

document.getElementById('card-num').addEventListener('input', () => {
    validateCardNum()
    checkInputsDesk()
})

document.getElementById('card-month').addEventListener('input', () => {
    validateExpDate()
    checkInputsDesk()
})
document.getElementById('card-year').addEventListener('input', () => {
    validateExpDate()
    checkInputsDesk()
})
document.getElementById('card-cvv').addEventListener('input', () => {
    validateCvv()
    checkInputsDesk()
})

function checkInputsDesk() {
    if (checkNumCardDesk && checkMonthCardDesk && checkYearCardDesk && checkCvvCardDesk) {
        checkPayment = true
    } else {
        checkPayment = false
    }
    checkSubmitOrder()
}

function validateName() {
    var name = document.getElementById('name').value
    var nameError = document.getElementById('nameError')

    if (!name) {
        nameError.textContent = 'Name is required'
        checkName = false
    } else if (name.length < 5) {
        nameError.textContent = 'Name must be at least 5 characters'
        checkName = false
    } else {
        nameError.textContent = ''
        checkName = true
    }
    checkSubmitOrder()
}

function validatePhone() {
    var phone = document.getElementById('phone').value
    var phoneError = document.getElementById('phoneError')

    if (!phone) {
        phoneError.textContent = 'Phone number is required'
        checkPhone = false
    } else if (!/^\+?\d+$/.test(phone)) {
        phoneError.textContent = 'Phone number must be a number'
        checkPhone = false
    }
     else if (!/^\d{10,12}$/.test(phone) && !/^\+\d{1,3}\d{9,11}$/.test(phone)) {
        phoneError.textContent = 'Phone number must be between 10 or 12 digits long'
        checkPhone = false
    } else {
        phoneError.textContent = ''
        checkPhone = true
    }
    checkSubmitOrder()
}

function validateAddress() {
    var addr = document.getElementById('address').value
    var addrError = document.getElementById('addrError')

    if (!addr) {
        addrError.textContent = 'Address is required'
        checkAddr = false
    } else if (addr.length < 10) {
        addrError.textContent = 'Address must be at least 10 characters'
        checkAddr = false
    } else {
        addrError.textContent = ''
        checkAddr = true
    }
    checkSubmitOrder()
}

function validateCardNum() {
    var cardNum = document.getElementById('card-num').value
    var numError = document.getElementById('numError')

    if (!cardNum) {
        numError.textContent = 'Card number is required'
        checkNumCardDesk = false
    } else if (!/^\d{16}$/.test(cardNum)) {
        numError.textContent = 'Card number must be 16 digits long'
        checkNumCardDesk = false
    } else {
        numError.textContent = ''
        checkNumCardDesk = true
    }
}


function validateExpDate() {
    var expMonth = document.getElementById('card-month').value
    var expYear = document.getElementById('card-year').value

    var month = parseInt(expMonth)
    // var year = parseInt(expYear)

    var expError = document.getElementById('expError')

    if (!expMonth) {
        expError.textContent = 'Please input a month'
        checkMonthCardDesk = false
    } else if (!/^\d{2}$/.test(expMonth)) {
        expError.textContent = 'Month must be at least 2 digits long'
        checkMonthCardDesk = false
    } else if (month < 1 || month > 12) {
        expError.textContent = 'Invalid month'
        checkMonthCardDesk = false
    } else if (!expYear) {
        expError.textContent = 'Please input a year'
        checkYearCardDesk = false
    } else if (!/^\d{2}$/.test(expYear)) {
        expError.textContent = 'Year must be at least 2 digits long'
        checkYearCardDesk = false
    }  else if (expYear < 24) {
        expError.textContent = 'Minimum year must be 2024'
        checkYearCardDesk = false
    } else {
        expError.textContent = ''
        checkYearCardDesk = true
        checkMonthCardDesk = true
    }
}


function validateCvv() {
    var cvv = document.getElementById('card-cvv').value
    var cvvError = document.getElementById('cvvError')

    if (!cvv) {
        cvvError.textContent = 'CVV is required'
        checkCvvCardDesk = false
    } else if (!/^\d{3}$/.test(cvv)) {
        cvvError.textContent = 'Invalid CVV'
        checkCvvCardDesk = false
    } else {
        cvvError.textContent = ''
        checkCvvCardDesk = true
    }
}

function paymentSetting() {
    var payment = document.getElementById('payment')
    var paymentMobile = document.getElementById('payment-mobile')
    if (window.innerWidth >= 768) {
        payment.classList.remove('none')
        paymentMobile.classList.add('none')
    } else {
        payment.classList.add('none')
        paymentMobile.classList.remove('none')
    }
}
paymentSetting()
window.addEventListener("resize", () => {
    paymentSetting()
    checkPayment = false
})

const menuPayment = document.querySelector('.payment-method-mobile')
const paymentBtn = menuPayment.querySelector('#select-btn')
const options = menuPayment.querySelectorAll('.mobile-opt')
const btnText = menuPayment.querySelector('.btn-text')
const selectImg = menuPayment.querySelector('#select-img')

paymentBtn.addEventListener('click', () => {
    menuPayment.classList.toggle('active')
})

options.forEach(option =>  {
    option.addEventListener('click', () => {
        let selectedBtn = option.querySelector('span').innerText
        btnText.innerText = selectedBtn

        while (selectImg.firstChild) {
            selectImg.removeChild(selectImg.firstChild)
        }
        
        var newImage = document.createElement('img')
        newImage.src = option.querySelector('img').src
        selectImg.appendChild(newImage)
        checkPayment = true

        if (option.id === 'card-mobile-btn') {
            checkPayment = false
            checkInputs()
        } 
        
        checkSubmitOrder()

        menuPayment.classList.remove('active')
        
    })
})

var cardnumCheck = false
var cardmonthCheck = false
var cardyearCheck = false
var cardcvvCheck = false

document.getElementById('card-num-mobile').addEventListener('input', () => {
    validateCardNumMobile()
    checkInputs()
})
document.getElementById('card-month-mobile').addEventListener('input', () => {
    validateExpDateMobile()
    checkInputs()
})
document.getElementById('card-year-mobile').addEventListener('input', () => {
    validateExpDateMobile()
    checkInputs()
})
document.getElementById('card-cvv-mobile').addEventListener('input', () => {
    validateCvvMobile()
    checkInputs()
})

function validateCardNumMobile() {
    var cardNum = document.getElementById('card-num-mobile').value
    var numError = document.getElementById('numError-mobile')

    if (!cardNum) {
        numError.textContent = 'Card number is required'
        cardnumCheck = false
    } else if (!/^\d{16}$/.test(cardNum)) {
        numError.textContent = 'Card number must be 16 digits long'
        cardnumCheck = false
    } else {
        numError.textContent = ''
        cardnumCheck = true
    }
}

function validateExpDateMobile() {
    var expMonth = document.getElementById('card-month-mobile').value
    var expYear = document.getElementById('card-year-mobile').value

    var month = parseInt(expMonth)

    var expError = document.getElementById('expError-mobile')

    if (!expMonth) {
        expError.textContent = 'Please input a month'
        cardmonthCheck = false
    } else if (!/^\d{2}$/.test(expMonth)) {
        expError.textContent = 'Month must be at least 2 digits long'
        cardmonthCheck = false
    } else if (month < 1 || month > 12) {
        expError.textContent = 'Invalid month'
        cardmonthCheck = false
    } else if (!expYear) {
        expError.textContent = 'Please input a year'
        cardyearCheck = false
    } else if (!/^\d{2}$/.test(expYear)) {
        expError.textContent = 'Year must be at least 2 digits long'
        cardyearCheck = false
    } else if (expYear < 24) {
        expError.textContent = 'Minimum year must be 2024'
        checkYearCardDesk = false
    }  else {
        expError.textContent = ''
        cardmonthCheck = true
        cardyearCheck = true
    }
}

function validateCvvMobile() {
    var cvv = document.getElementById('card-cvv-mobile').value
    var cvvError = document.getElementById('cvvError-mobile')

    if (!cvv) {
        cvvError.textContent = 'CVV is required'
        cardcvvCheck = false
    } else if (!/^\d{3}$/.test(cvv)) {
        cvvError.textContent = 'Invalid CVV'
        cardcvvCheck = false
    } else {
        cvvError.textContent = ''
        cardcvvCheck = true
    }
}

var submitBtn = document.getElementById('submit-card')

function checkInputs() {
    if (cardnumCheck === true && cardmonthCheck === true && cardyearCheck === true && cardcvvCheck === true) {
        submitBtn.disabled = false
        checkPayment = true
    } else {
        submitBtn.disabled = true
        checkPayment = false
        checkSubmitOrder()
    }
}


var submitAllButton = document.getElementById('submit-order')
function checkSubmitOrder() {
    if (checkName && checkAddr && checkPhone && checkPayment) {
        submitAllButton.disabled = false
    } else {
        submitAllButton.disabled = true
    }
}

function closePopUp() {
    var overlay = document.getElementById('overlay')
    overlay.classList.toggle('pop-active')
    var popupCard = document.getElementById('popup-card')
    popupCard.classList.toggle('pop-active')
    if (!checkPayment) {
        btnText.innerText = 'Select Payment Method'

        while (selectImg.firstChild) {
            selectImg.removeChild(selectImg.firstChild)
        }
        var newI = document.createElement('i')
        newI.className = 'fa-solid fa-wallet'
        selectImg.appendChild(newI)
    }
}

function togglePopUp(){
    var overlay = document.getElementById('overlay')
    overlay.classList.toggle('pop-active')
    var popupCard = document.getElementById('popup-card')
    popupCard.classList.toggle('pop-active')
    checkSubmitOrder()
    if (!checkPayment) {
        btnText.innerText = 'Select Payment Method'

        while (selectImg.firstChild) {
            selectImg.removeChild(selectImg.firstChild)
        }
        var newI = document.createElement('div')
        newI.className = 'fa-solid fa-wallet'
        selectImg.appendChild(newI)
    }
}
