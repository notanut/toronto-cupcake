let products = null;
fetch('product_av.json')
.then(response => response.json())
.then(data => {
    products = data;
    showDetail();
})

function showDetail() {
    let detail = document.querySelector('detail');
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productId;
    })[0];
    if(!thisProduct){
        window.location.href = "/";
    }
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = thisProduct.price;
    detail.querySelector('.description').innerText = thisProduct.description;

    let listProduct = document.querySelector('.listProduct');
    (products.filter(value => value.id != productId))
    .foEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = '/detail.html?id' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src = "${product.image}">
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>
        `;
        listProduct.appendChild(newProduct);
    })
}