let cartCount = 0;
let totalPrice = 0;

function addToCart(productName, price){

    cartCount++;
    totalPrice = totalPrice + price;

    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("total-price").innerText = totalPrice;

    let cartItems = document.getElementById("cart-items");

    let li = document.createElement("li");

    li.innerHTML = productName + " - ₹" + price + 
    " <button onclick='removeItem(this, " + price + ")'>Remove</button>";

    cartItems.appendChild(li);
}

function removeItem(button, price){

    button.parentElement.remove();

    cartCount--;
    totalPrice = totalPrice - price;

    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("total-price").innerText = totalPrice;
}