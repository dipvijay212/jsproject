let param = new URLSearchParams(window.location.search);
console.log(window.location.search);

let cart = [];

window.addEventListener("load", () => {
  //   addButton.classList.add("add-to-cart");
  let btn = document.getElementById("btn");
  let paramObj = {
    image: param.get("image"),
    title: param.get("title"),
    price: param.get("price"),
    description: param.get("description"),
    // category: param.get("category"),
  };
  let image = (document.getElementById("image").src = paramObj.image);
  let title = (document.getElementById("title").innerHTML = paramObj.title);
  // let price = (document.getElementById("price").innerHTML = paramObj.price);
  let description = (document.getElementById("price").innerHTML = paramObj.description);
  let cart1 = document.getElementById("cart1");
  console.log(paramObj);
  console.log(paramObj.image);
  btn.addEventListener("click", () => {
    let paramObj = {
      image: param.get("image"),
      title: param.get("title"),
      price: param.get("description"),
      category: param.get("category"),
    };
    cart.push(paramObj);
    localStorage.setItem("details", JSON.stringify(cart));
     document.querySelector("#image7").src=paramObj.image;
     document.querySelector("#add-to-text").textContent=paramObj.title; 
     let finalPice=document.querySelector("#price1").textContent=paramObj.price;
     localStorage.setItem('finalPrice',finalPice);
  });
  cartNew=localStorage.getItem("details");
  console.log(cartNew)
});


//  add to card 
let minus=document.querySelector(".c1");
let number=document.querySelector(".c2");
let pluss=document.querySelector(".c3");
let total=0;
let cards=[];
pluss.addEventListener("click",()=>{
  total++;
  number.textContent=total; 
  
  let storedPrice = localStorage.getItem('finalPrice');
  if (storedPrice) {
    totalPrice = Number(storedPrice);
  } else {
    totalPrice = 0;
  }
   let finalTotal=totalPrice*total;
   let price1=document.querySelector("#price1");
   price1.textContent = finalTotal;
   let subtotalPrice=document.querySelector("#Subtotal-price");
   subtotalPrice.textContent=finalTotal; 
  
   localStorage.setItem('finalPrice', finalPrice);
})
minus.addEventListener("click", () => {
  if (total > 1) {
    total--;
    number.textContent = total;
    let storedPrice = localStorage.getItem('finalPrice');
    if (storedPrice) {
      totalPrice = Number(storedPrice);
    } else {
      totalPrice = 0;
    }
    let finalTotal = totalPrice * total;
    let price1=document.querySelector("#price1");
    price1.textContent = finalTotal;
    let subtotalPrice=document.querySelector("#Subtotal-price");
   subtotalPrice.textContent=finalTotal; 
  
    localStorage.setItem('finalPrice', finalPrice);
 }
});