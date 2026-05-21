let cartCount = 0;
let totalPrice = 0;
let cartProducts = [];

function addToCart(productName, price){

    document.querySelector(".cart-box").style.display = "block";

    cartCount++;
    totalPrice = totalPrice + price;

    cartProducts.push({
        name: productName,
        price: price
    });

    document.getElementById("cart-count").innerText = cartCount;

    document.getElementById("total-price").innerText = totalPrice;

    let cartItems = document.getElementById("cart-items");

    let li = document.createElement("li");

    li.innerHTML = `
        ${productName} - ₹${price}
        <button onclick="removeItem(this, '${productName}', ${price})">
            Remove
        </button>
    `;

    cartItems.appendChild(li);
}

function removeItem(button, productName, price){

    button.parentElement.remove();

    cartCount--;

    totalPrice = totalPrice - price;

    let index = cartProducts.findIndex(item =>
        item.name === productName && item.price === price
    );

    if(index !== -1){
        cartProducts.splice(index, 1);
    }

    document.getElementById("cart-count").innerText = cartCount;

    document.getElementById("total-price").innerText = totalPrice;

    if(cartCount === 0){

        document.querySelector(".cart-box").style.display = "none";

    }

}

function checkoutWhatsApp(){

    if(cartCount === 0){

        alert("Your cart is empty!");

        return;

    }

    let message = "Hello, I want to order:\n\n";

    cartProducts.forEach(function(item){

        message += "• " + item.name + " - ₹" + item.price + "\n";

    });

    message += "\nTotal: ₹" + totalPrice;

    let phoneNumber = "919711477800";

    let whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}