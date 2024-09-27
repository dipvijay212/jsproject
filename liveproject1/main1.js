




// let product = document.querySelector(".product");
// let productdetailes =[]
// function myfunction(){
//     fetch("http://localhost:3000/totaldetail")
//     .then((res)=>{
//        return res.json()
//     }).then((data)=>{
//         console.log(data);
//         display(data);
//         productdetailes = data;
//      }).catch((err)=>{
//          alert("something wrong");
//      })
// }
// myfunction();
// function display(e){
//     e.map((el)=>{
//         let store = show(el.image,el.price,el.rating,el.title)
//         product.innerHTML += store;
//     })
// }
// function show(image,title,price,rating){
//  let store =     `
//  <div class="pro1">
//             <img src="${image}" alt="">
//             <h4>${title}</h4>
//             <span>${rating}</span>
//             <p>${price}</p>
//         </div>
//        <div class="pro1">
//             <img src="${image}" alt="">
//             <h4>${title}</h4>
//             <span>${rating}</span>
//             <p>${price}</p>
//         </div>
//        <div class="pro1">
//             <img src="${image}" alt="">
//             <h4>${title}</h4>
//             <span>${rating}</span>
//             <p>${price}</p>
//         </div>
//        <div class="pro1">
//             <img src="${image}" alt="">
//             <h4>${title}</h4>
//             <span>${rating}</span>
//             <p>${price}</p>
//         </div>
// `
// return store;
// }