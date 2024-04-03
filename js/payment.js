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
