document.addEventListener("DOMContentLoaded", function() {
    const main = document.getElementById('selectAll');
    const select = document.querySelectorAll('.product-checkbox');
    const buttons = document.querySelectorAll(".buttons");
    const quantities = document.querySelectorAll(".num");
    const prices = document.querySelectorAll(".price");
    const subtotals = document.querySelectorAll(".subtotal");
    const totalElement = document.querySelector(".total");
    const productsSection = document.querySelector(".products");
    const products = document.querySelectorAll(".product");
    const totalSection = document.querySelector(".sub");
    const section = document.getElementById('shopping-section');
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
    const mids = document.querySelectorAll(".mid");

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
    
    mids.forEach((mid,index) => {
        mid.addEventListener('click', function() {
            handleCheckBox(this,index)
        })
    });
    
    function handleCheckBox(mid,index) {
        if(products[index].querySelector('input[type="checkbox"]').checked){
            products[index].querySelector('input[type="checkbox"]').checked = false
        }else{
            products[index].querySelector('input[type="checkbox"]').checked = true
        }
        calculateSubtotal(index)
        calculateTotal()
        
    }

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
            if(quantity==1){
                qty--;
                if (select[index].checked) {
                    totalSum -= parseFloat(subtotals[index].textContent);
                    totalElement.textContent = totalSum;
                }
                const productToDelete = select[index].closest('.product');
                productToDelete.style.display = 'none'; 
                select[index].checked = false; 
                calculateTotal();
                checkEmptyShoppingBag(); 
            }
            if (quantity > 1) {
                quantity--;
                quantities[index].textContent = quantity;
                calculateSubtotal(index);
                calculateTotal();
            }
        });

        deleteButton.addEventListener("click", () => {
            qty--;
            if (select[index].checked) {
                totalSum -= parseFloat(subtotals[index].textContent);
                totalElement.textContent = totalSum;
            }
            const productToDelete = select[index].closest('.product');
            productToDelete.style.display = 'none'; 
            select[index].checked = false; 
            calculateTotal();
            checkEmptyShoppingBag(); 
        });        
    });

    function calculateSubtotal(index) {
        const priceValue = parseFloat(prices[index].textContent);
        const quantityValue = parseInt(quantities[index].textContent);
        const subtotal = priceValue * quantityValue;
        subtotals[index].textContent = subtotal;
    }

    function calculateTotal() {
        totalSum = 0;
        subtotals.forEach((subtotal, index) => {
            if (select[index].checked && select[index].closest('.product').style.display !== 'none') {
                totalSum += parseFloat(subtotal.textContent);
            }
        });
        totalElement.textContent = totalSum;
        checkSubmitOrder()
    }

    function checkEmptyShoppingBag() {
        const products = document.querySelectorAll('.product');
        if (products.length === 0 || qty === 0) {
            productsSection.style.display = 'none';
            totalSection.style.display = 'none';
            displayEmptyShoppingBag();
        }
    }
    
    function displayEmptyShoppingBag() {
        const emptyBagHTML = `
            <div class="empty-bag">
                <img src="assets/img/shopping/cart.gif" alt="cart" class="cart">
                <h2>Oops...</h2>
                <h2>The cart is empty</h2>
                <p>Go find the cupcake you like</p>
                <a href="menu.html"><button class="but_empty">Back to Menu</button></a>
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

    var checkOutButton = document.getElementById('checkout')
    checkOutButton.disabled = true;

    function checkSubmitOrder() {
        if (totalSum > 0) {
            checkOutButton.disabled = false;
        } else {
            checkOutButton.disabled = true;
        }
    }

    calculateTotal();
});
