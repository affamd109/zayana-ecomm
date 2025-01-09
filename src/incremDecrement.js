import { getCartProdLS } from "./getCartProdLS";
import { updateCartProdTotal } from "./updateCartProdTotal";

export const incremDecrement = (event , cardNo , price,stock) =>{

    const currentCardElement = document.querySelector(`#card${cardNo}`);
    // console.log(currentCardElement);

    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const subtotalCart = currentCardElement.querySelector(".subtotalCart");


    let quantity = 1;
    let localStoragePrice = 0;


    //Now first get the dtata from the local storage

    let localStorageProduct = getCartProdLS();

    let existingProd = localStorageProduct.find((curProd) => curProd.cardNo === cardNo);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }

    else{
        localStoragePrice = price;
        price = price; 
    }

    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity += 1;
        }
        else if(quantity === stock ){
            quantity = stock;
            localStoragePrice = price * stock;
        }

    }

    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    localStoragePrice = price * quantity;

    let updatedCart = {cardNo , quantity , price : localStoragePrice};

    updatedCart = localStorageProduct.map((curProd2) =>{
        return curProd2.cardNo === cardNo ? updatedCart : curProd2;

    })

    
    localStorage.setItem("cartProductsLS" , JSON.stringify(updatedCart));

    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity" , quantity.toString());
    subtotalCart.innerText = `$${localStoragePrice}`;




    updateCartProdTotal();

};