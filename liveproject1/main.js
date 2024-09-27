let product = document.querySelector(".product");
let meet = document.querySelector(".meet");
let productDetails = [];

function myfunction() {
  fetch("http://localhost:3000/totaldetail")
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
  product.innerHTML = ""; // Clear previous products
  e.map((el) => {
    let store = show(el.image, el.description, el.title);
    product.innerHTML += store;
  });
  // if (e.length === 0) {
  //   product.innerHTML = <p>No products found.</p>;
  // }
}

function show(image, title, description) {
  return `
    <a href="decription.html?image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&review=${encodeURIComponent(review)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}">
    <div class="product-card">
      <img src="${image}" alt="${title}">
      <span> ${description}</span>
      <p>${title}</p>
    </div>
    </a>
  `;
}



function myfunction1() {
  fetch("http://localhost:3000/det")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      display1(data);
      productDetails = data;
    })
    .catch((err) => {
      console.log(err);
    });
}

myfunction1();

function display1(e) {
  meet.innerHTML = ""; // Clear previous products
  e.map((el) => {
    let store1 = show1(el.image, el.rating, el.title,el.description,el.order);
    meet.innerHTML += store1;
  });
}

function show1(image, title, order, rating,description) {
  return `
    <div class="meet-card">
      <img src="${image}" alt="${title}">
      <span> ${rating}</span>
       <h4>${order}</h4>
        <button>${description}</button>
     

    </div>
  `;
} 