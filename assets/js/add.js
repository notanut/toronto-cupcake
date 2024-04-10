document.addEventListener('DOMContentLoaded', function() {
    // Get the add to cart buttons
    const addToCartButtons = document.querySelectorAll('.menu__button');

    // Get the quantity element
    const quantityElement = document.querySelector('.quantity');

    // Initialize the quantity from localStorage if available, otherwise set it to 0
    let quantity = localStorage.getItem('cartQuantity') ? parseInt(localStorage.getItem('cartQuantity')) : 0;
    
    // Update the quantity text initially
    quantityElement.textContent = quantity;

    // Add event listener to each add to cart button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Increase the quantity by 1
            quantity++;
            
            // Update the quantity text
            quantityElement.textContent = quantity;

            // Store the updated quantity in localStorage
            localStorage.setItem('cartQuantity', quantity.toString());
        });
    });

    // Add event listener to shopping cart button
    const shoppingCartButton = document.querySelector('.fa-cart-shopping');
    shoppingCartButton.addEventListener('click', function() {
        // Reset quantity to 0
        quantity = 0;

        // Update the quantity text
        quantityElement.textContent = quantity;

        // Remove quantity data from localStorage
        localStorage.removeItem('cartQuantity');
    });
});