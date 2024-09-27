let product1 = document.querySelector(".product1");
let meet = document.querySelector(".meet");
let productDetails = [];
let cart = [];

function myfunction() {
  fetch("http://localhost:3000/productdetails")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      display(data);
      productDetails = data;
    })
    .catch((err) => {
      console.log(err);
    });
}

myfunction();

function display(e) {
  product1.innerHTML = "";
  // Clear previous products
  e.map((el) => {
    let store = show(el.image, el.description, el.title, el.price, el.review);
    product1.innerHTML += store;
  });
  // if (e.length === 0) {
  // product.innerHTML = <p>No products found.</p>;
  // }
}

function show(image, title, price, description, review) {
  return `
  <a href="decription.html?image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&review=${encodeURIComponent(review)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}">
  <div class="product-card">
    <img src="${image}" alt="${title}">
    <p id="pr">$${price}</p>
    <p>${review}</p>
    <span>${description}</span>
    <button class="add-to-cart" data-product-id="${title}">Add to Cart</button>
  </div>
  </a>
  `;
}

// Add event listener to add to cart buttons
product1.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = e.target.dataset.productId;
    const product = productDetails.find((el) => el.title === productId);
    addToCart(product);
  }
});

// Add to cart function
function addToCart(product) {
  const existingProduct = cart.find((el) => el.title === product.title);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  console.log(cart);
  updateCartCount();
}

// Update cart count
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  cartCount.innerText = `Cart (${cart.length})`;
}