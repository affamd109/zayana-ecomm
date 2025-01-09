import { getCartProdLS } from "./getCartProdLS";
import { showToast } from "./showToast";
import { updateNavCart } from "./updateNavCart";

getCartProdLS();

export const addToCart = (event , cardNo , stock) =>{
    const currentProductElement = document.querySelector(`#card${cardNo}`);
    console.log(currentProductElement);


//Neeche waala ek fucntion hai jisko jab bhi koi call krega
//toh jo local storage me data hai vo hame idhr  mil jaega
    let localStorageProduct = getCartProdLS();



    let quantity = currentProductElement.querySelector(".productQuantity").innerText;
    console.log(quantity);
    let price = currentProductElement.querySelector(".productPriceElement").innerText;
    console.log(price);

    // console.log(price , quantity);


/* This is the section of the code where I will be updating the quantity value
if the same cardNo exists in the localStorage */

    let existingProd = localStorageProduct.find((curProd) =>{
        return curProd.cardNo === cardNo; 
/* The find() method returns the first element in the array that
satisfies the provided condition (i.e., the first product object with a matching cardNo).*/
//Toh idhr yaha pe existingProd will be equal to an object , ye wahi 
//object rhega jo exsiting hai local storage me 
 
    }) 
    console.log(existingProd);
    


    if(existingProd && quantity >= 1){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = price.replace("$" , "");
        price = Number(price * quantity);

        //Phle ek overview wala updatedCart object define krdiya , jo ho skta hai change ho  ya same rhe
        let updatedCart = {cardNo , quantity , price};

        updatedCart = localStorageProduct.map((curProd) => {
           return curProd.cardNo === cardNo ? updatedCart : curProd;
        })

        localStorage.setItem("cartProductsLS" , JSON.stringify(updatedCart));
        showToast("add" , cardNo);
    }


    if(existingProd){

        return false;
        //Agar ye execute hua ...toh neeche ka kuch bhi firse nahi hoga execute obviously
    }


    price = price.replace("$" , "");
    price =  Number(price * quantity);
    quantity = Number(quantity);

/* Neeche vaale line ka ye mtlb hai ki we will be pushing an object 
in the localStorageProduct array ....Explanation detail in notes*/

    localStorageProduct.push({cardNo , quantity , price});
    localStorage.setItem("cartProductsLS" , JSON.stringify(localStorageProduct)); 
    //As i need to store an object, thats why i need to do JSON.stringify

    //Now updating the navbar cart

    updateNavCart(localStorageProduct);
    showToast("add" , cardNo);
   
    
};
