let selectedItems = [];

function toggleSelect(card, price) {

  card.classList.toggle("selected");

  if (card.classList.contains("selected")) {
    selectedItems.push({
      name: card.innerText,
      price: price
    });
  } else {
    selectedItems = selectedItems.filter(item => item.name !== card.innerText);
  }
}

// Add to cart 
function addToCart() {
  if (selectedItems.length === 0) {
    alert("Select items first");
  } else {
    alert("Items added to cart ✅");
  }
}

// Confirm 
function confirmOrder() {
  let box = document.getElementById("cartBox");

  let total = selectedItems.reduce((sum, item) => sum + item.price, 0);

  let itemsList = selectedItems.map(item => item.name).join("<br>");

  box.innerHTML = `
    <h3>Selected Items:</h3>
    <p>${itemsList}</p>
    <h3>Total: ₹${total}</h3>
  `;
}

// Order 
function placeOrder() {
  if (selectedItems.length === 0) {
    alert("Select items first ❗");
  } else {
    window.location.href = "success.html";
  }
}

