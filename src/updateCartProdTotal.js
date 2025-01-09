import { getCartProdLS } from "./getCartProdLS";

export const updateCartProdTotal = () =>{
    let cartProducts = getCartProdLS();
    let initialValue = 0;
    let totalPrice = cartProducts.reduce((accum , currElem) =>{
        let productPrice = parseInt(currElem.price) || 0;
        return accum + productPrice;

    } , initialValue);

    console.log(totalPrice);

    subtotalOfCart.textContent = `$${totalPrice}`;
    totalSummary.innerText = `$${totalPrice}`;






};