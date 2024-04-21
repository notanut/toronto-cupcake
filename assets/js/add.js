document.addEventListener('DOMContentLoaded', function() {
    // Get the add to cart buttons
    const addToCartButtons = document.querySelectorAll('.menu__button');

    // Get the quantity element
    const quantityElement = document.querySelector('.quantity');

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
        });
    });

    // Function to update the quantity text
    function updateQuantityText() {
        quantityElement.textContent = quantity;
    }
});