//In order to design the cart page.. obviously we will need the products from our api
import products from './api/products.json';
import { fetchDataFromLS } from './fetchDataFromLS';
import { getCartProdLS } from './getCartProdLS';
import { incremDecrement } from './incremDecrement';
import { removeTheCard } from './removeTheCard';
import { updateCartProdTotal } from './updateCartProdTotal';

//Then we will need the elemnets in the local storage that 

let cartProducts = getCartProdLS(); //This gives me the array containing elemnts in the local storage
// console.log(cartProducts);

//Now we will get those whole objects from 'products.json' of those elements which are in the local storage

//U are using filter cuz u need to filter out those elements which are in the local storage
let filterProducts = products.filter((currProd) =>{
    return cartProducts.some((currElem) => currElem.cardNo === currProd.cardNo);
});


// console.log(filterProducts);


const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () =>{
    filterProducts.forEach((curProd) =>{
        const {cardNo , name , category , price , image , stock} = curProd;

/* Now here also we have to make productClone by importing the node 
to clone the template container*/

let productClone = document.importNode(templateContainer.content ,true);

productClone.querySelector("#cardValue").setAttribute("id" , `card${cardNo}`);

//Below line,  we will be fetching the quantity and the subtotal from the LS
let LSdata = fetchDataFromLS(cardNo , price);
// console.log(LSdata);


// productClone.querySelector(".category").textContent = category;
productClone.querySelector(".productName").textContent = name;
productClone.querySelector(".cartImage").src = image;
productClone.querySelector(".cartImage").alt = name;
productClone.querySelector(".productPriceElement").textContent = `$${price}`;
productClone.querySelector(".subtotalCart").textContent = `$${LSdata.price}`;
productClone.querySelector(".productQuantity").textContent = LSdata.quantity;

//Changing the quantities of the data on te cart page 

const cartQuantity = productClone.querySelector(".productQuantityElement")

cartQuantity.addEventListener("click" , (event) =>{
    incremDecrement(event , cardNo , price ,stock);

})



//Removing from the cart
const remove = productClone.querySelector("#remove");
remove.addEventListener("click" , (event)=>{
    removeTheCard(event , cardNo);

});








cartElement.appendChild(productClone);



    })
};


showCartProduct();

updateCartProdTotal();






