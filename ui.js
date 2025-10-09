import { displayBooks } from "./books.js";

export function updateCartUI(cart) {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, idx) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.title} - ₹${item.price}</span>
      <button class="remove-btn" data-index="${idx}">✖</button>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = "Total: ₹" + total;

  // Single event delegation
  cartItems.onclick = (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1); // remove from cart
      updateCartUI(cart);    // update cart visually
      displayBooks();        // 🔁 refresh book buttons
    }
  };
}
