import { updateNavCart } from "./updateNavCart";

export const getCartProdLS = () =>{

/*the below line means that , we will be getting the data of the 
key : "cartProductsLS" , from the local storage  */
    let cartProducts = localStorage.getItem("cartProductsLS");

    if(!cartProducts){
        return []; //If cartProducts is empty , then we can return an empty array

    }

    cartProducts = JSON.parse(cartProducts);

    updateNavCart(cartProducts);
    
    return cartProducts;

}