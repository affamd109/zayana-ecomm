import { getCartProdLS } from "./getCartProdLS";
import { showToast } from "./showToast";
import { updateCartProdTotal } from "./updateCartProdTotal";
import { updateNavCart } from "./updateNavCart";

export const removeTheCard = (event , cardNo) =>{
    let localStorageProduct = getCartProdLS();
    // console.log('lala');
    // console.log(localStorageProduct);
    
    // console.log('lala2');
    
    let existingProdCart =  localStorageProduct.filter((curProd) =>{
        return curProd.cardNo !== cardNo;

    })

    // console.log(existingProdCart);

    localStorageProduct = existingProdCart;
    localStorage.setItem("cartProductsLS" , JSON.stringify(localStorageProduct)); 

    // console.log('lala3');
    
    // console.log(localStorageProduct);
    
    // console.log('lala4');



//To remove div on click
    let removeDiv = document.getElementById(`card${cardNo}`);

    if(removeDiv){
        removeDiv.remove();

        //Show toast when product removed from the cart 
        showToast("delete" , cardNo);

    }


    updateCartProdTotal();
    updateNavCart(localStorageProduct);



}