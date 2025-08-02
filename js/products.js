import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


import { auth, onAuthStateChanged } from "./firebase-auth.js";

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "auth/login.html";
  }
  // if anonymous or logged-in, continue rendering
});

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCArA-M1kA28Zr-MfGA8AHrujVaJtBxkr0",
  authDomain: "tailsandtreats.firebaseapp.com",
  projectId: "tailsandtreats",
  storageBucket: "tailsandtreats.firebasestorage.app",
  messagingSenderId: "527033962954",
  appId: "1:527033962954:web:7e28cfc7505096487bff33"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🛒 Cart setup
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}


// 🔁 Pagination state
let allProducts = [];
let currentPage = 1;
const itemsPerPage = 8;

function paginateProducts(products, page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.slice(start, end);
}

// 🛍️ Render Products
const renderProducts = (products) => {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  const paginated = paginateProducts(products, currentPage);

  paginated.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.imageURL}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p>${product.description}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;

    card.querySelector(".add-to-cart-btn").addEventListener("click", () => {
      addToCart(product);
    });

    container.appendChild(card);
  });

  renderPaginationControls(products.length);
};

function renderPaginationControls(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationContainer = document.getElementById("pagination-controls");

  paginationContainer.innerHTML = `
    <button ${currentPage === 1 ? "disabled" : ""} id="prev-btn" style="background:none; border:none; font-size:1.2rem; cursor:pointer;"><<<</button>
    <span style="margin: 0 15px;">${currentPage} of ${totalPages}</span>
    <button ${currentPage === totalPages ? "disabled" : ""} id="next-btn" style="background:none; border:none; font-size:1.2rem; cursor:pointer;">>>></button>
  `;

  document.getElementById("prev-btn")?.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts(allProducts);
    }
  });

  document.getElementById("next-btn")?.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProducts(allProducts);
    }
  });
}


// 📦 Fetch Products
async function fetchProducts() {
  const productsCol = collection(db, "products");
  const snapshot = await getDocs(productsCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// 🚀 Initialize
(async () => {
  allProducts = await fetchProducts();
  renderProducts(allProducts);
})();

// 🧠 Category Filter logic + Active class
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    const selectedCategory = e.target.dataset.category;

    // Remove 'active' from all buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    // Add 'active' to clicked button
    e.target.classList.add("active");

    currentPage = 1; // Reset to first page on filter

    if (selectedCategory === "All") {
      renderProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.category === selectedCategory);
      renderProducts(filtered);
    }
  }
});

document.getElementById("search-input").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();

  const filtered = allProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  });

  currentPage = 1; // Reset to first page
  renderProducts(filtered);
});

