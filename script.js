let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const totalPrice = document.getElementById("total-price");

    cartList.innerHTML = "";

    cart.forEach((product, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${product.item} - ₹${product.price}
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartList.appendChild(li);
    });

    cartCount.innerText = cart.length;
    totalPrice.innerText = total;
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}function openPayment() {
    if (cartCount === 0) {
        alert("Your cart is empty!");
        return;
    }
    document.getElementById("payment-popup").style.display = "flex";
}

function closePayment() {
    document.getElementById("payment-popup").style.display = "none";
}

function makePayment() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    alert("Payment Successful! Thank you " + name + " 😊");

    cartCount = 0;
    totalPrice = 0;

    document.getElementById("cart-count").innerText = 0;
    document.getElementById("total-price").innerText = 0;
    document.getElementById("cart-items").innerHTML = "";

    closePayment();
}