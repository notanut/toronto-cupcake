document.addEventListener('DOMContentLoaded', function() {
    // Get the add to cart buttons
    const addToCartButtons = document.querySelectorAll('.menu__button');

    // Get the check out button
    const checkOutButton = document.querySelector('.check_out_button');

    // Get the quantity button
    const quantityButton = document.querySelector('.quantity');

    // Get the quantity element
    const quantityElement = document.querySelector('.quantity');

    // Get the toast box
    const toastBox = document.getElementById('toast__box');

    // Initialize the quantity from localStorage if available, otherwise set it to 0
    let quantity = localStorage.getItem('cartQuantity') ? parseInt(localStorage.getItem('cartQuantity')) : 0;

    // Update the quantity text initially
    updateQuantityText();

    // Add event listener to each add to cart button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Increase the quantity by 1
            quantity++;

            // Update the quantity text
            updateQuantityText();

            // Store the updated quantity in localStorage
            localStorage.setItem('cartQuantity', quantity.toString());

            // Show the toast notification
            showToast();
        });
    });

    // Add event listener to the check out button
    if (checkOutButton) {
        checkOutButton.addEventListener('click', handleCheckOut);
    }

    // Add event listener to the quantity button
    if (quantityButton) {
        quantityButton.addEventListener('click', handleReset);
    }

    // Function to update the quantity text
    function updateQuantityText() {
        quantityElement.textContent = quantity;
    }

    // Function to handle the check out button click
    function handleCheckOut() {
        // Increase the quantity by 1
        quantity++;

        // Update the quantity text
        updateQuantityText();

        // Store the updated quantity in localStorage
        localStorage.setItem('cartQuantity', quantity.toString());

        // Show the toast notification
        showToast();
    }

    // Function to handle the quantity button click (reset)
    function handleReset() {
        // Reset quantity to 0
        quantity = 0;

        // Update the quantity text
        updateQuantityText();

        // Remove the quantity from localStorage
        localStorage.removeItem('cartQuantity');
    }

    // Function to show the toast notification
    function showToast() {
        // Show the toast box
        toastBox.style.display = 'flex';

        // Create and append the toast element
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = 'Cupcake added to cart';

        toastBox.appendChild(toast);

        // Remove the toast after a delay
        setTimeout(() => {
            toastBox.removeChild(toast);
            // Hide the toast box when no toast left
            if (toastBox.children.length === 0) {
                toastBox.style.display = 'none';
            }
        }, 3000);
    }
});
