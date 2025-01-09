import { getCartProdLS } from "./getCartProdLS";

export const fetchDataFromLS = (cardNo , price) =>{

    let localStorageProduct = getCartProdLS();

//Now we have to check ki konsi cardNo stored hai in local storage 
let existingProduct = localStorageProduct.find((currProd) => currProd.cardNo === cardNo);
let quantity = 1;

console.log(existingProduct);
//existingProduct ek object hai jo ki local storage me tha
if(existingProduct){
    quantity = existingProduct.quantity;
    price = existingProduct.price;

}

return {quantity , price};

};