document.addEventListener("DOMContentLoaded", function() {
    const main = document.getElementById('selectAll');
    const select = document.querySelectorAll('.product-checkbox');
    const buttons = document.querySelectorAll(".buttons");
    const quantities = document.querySelectorAll(".num");
    const prices = document.querySelectorAll(".price");
    const subtotals = document.querySelectorAll(".subtotal");
    const totalElement = document.querySelector(".total");
    const productsSection = document.querySelector(".products");
    const totalSection = document.querySelector(".sub");
    const section = document.getElementById('shopping-section');
    let qty = buttons.length;
    let totalSum = 0;

    main.addEventListener('change', () => {
        select.forEach(checkbox => {
            checkbox.checked = main.checked;
        });
        calculateTotal();
    });

    select.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            calculateTotal();
        });
    });

    buttons.forEach((button, index) => {
        let quantity = 1; 

        const plus = button.querySelector(".plus");
        const minus = button.querySelector(".minus");
        const deleteButton = button.querySelector(".material-symbols-outlined");

        plus.addEventListener("click", () => {
            quantity++;
            quantities[index].textContent = quantity;
            calculateSubtotal(index);
            calculateTotal();
        });

        minus.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantities[index].textContent = quantity;
                calculateSubtotal(index);
                calculateTotal();
            }
        });

        deleteButton.addEventListener("click", () => {
            // Remove the corresponding product when delete button is clicked
            qty--;
            if (select[index].checked) {
                totalSum -= parseFloat(subtotals[index].textContent);
                totalElement.textContent = totalSum;
            }
            const productToDelete = select[index].closest('.product');
            productToDelete.style.display = 'none'; // Hide the product
            select[index].checked = false; // Uncheck the checkbox
            calculateTotal();
            checkEmptyShoppingBag(); // Check if shopping bag is empty after product removal
        });        
    });

    // Function to calculate subtotal for a specific product
    function calculateSubtotal(index) {
        const priceValue = parseFloat(prices[index].textContent);
        const quantityValue = parseInt(quantities[index].textContent);
        const subtotal = priceValue * quantityValue;
        subtotals[index].textContent = subtotal;
    }

    // Function to calculate total sum of checked products
    function calculateTotal() {
        totalSum = 0;
        subtotals.forEach((subtotal, index) => {
            if (select[index].checked && select[index].closest('.product').style.display !== 'none') {
                totalSum += parseFloat(subtotal.textContent);
            }
        });
        totalElement.textContent = totalSum;
    }

    // Check if the shopping bag is empty and hide products and total sections
    function checkEmptyShoppingBag() {
        const products = document.querySelectorAll('.product');
        if (products.length === 0 || qty === 0) {
            productsSection.style.display = 'none';
            totalSection.style.display = 'none';
            displayEmptyShoppingBag();
        }
    }
    
    // Function to display "Empty Shopping Bag"
    function displayEmptyShoppingBag() {
        const emptyBagHTML = `
            <div class="empty-bag">
                <img src="assets/img/cart.gif" alt="cart" class="cart">
                <h2>Oops...</h2>
                <h2>The cart is empty</h2>
                <p>Go find the cupcake you like</p>
                <a href="menu.html"><button>Back to Menu</button></a>
            </div>
        `;
        section.innerHTML = emptyBagHTML.trim();
    }
    
    const checkoutButton = document.querySelector(".checkout");
    checkoutButton.addEventListener("click", (event) => {
        if (totalSum > 0) {
            console.log("Proceeding with checkout...");
        } else {
            alert("Please choose at least 1 product before checkout.");
            event.preventDefault();
        }
    });

    // Call calculateTotal function initially to set the total based on initial quantities
    calculateTotal();
});
