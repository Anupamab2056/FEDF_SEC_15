import { books } from './data.js';
import { addToCart, cart } from './cart.js';
import { updateCartUI } from './ui.js';

export function displayBooks() {
  const bookList = document.getElementById("bookList");
  if (!bookList) return;

  bookList.innerHTML = ""; // Clear previous

  books.forEach((book, index) => {
    const isInCart = cart.some(item => item.title === book.title);
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-card");

    bookDiv.innerHTML = `
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">by ${book.author}</p>
        <p class="book-price">₹${book.price}</p>
      </div>
      <div class="book-action">
        ${
          book.availability === "in stock"
            ? isInCart
              ? `<button class="add-to-cart-btn added" data-index="${index}" disabled>Added ✅</button>`
              : `<button class="add-to-cart-btn" data-index="${index}">Add to Cart</button>`
            : `<span class="out-of-stock">Out of Stock</span>`
        }
      </div>
    `;

    bookList.appendChild(bookDiv);
  });
}

// Add event delegation ONCE outside the function
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn") && !e.target.disabled) {
    const idx = e.target.getAttribute("data-index");
    addToCart(books[idx]);
    updateCartUI(cart);
    displayBooks(); // 🔄 refresh after adding
  }
});
