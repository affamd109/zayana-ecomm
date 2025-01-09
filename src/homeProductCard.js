import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle"; /* Jahan  homeQuantityToggle likha hai 
waha pe control + space hit krne pe ye aajaega*/

const productContainer = document.querySelector(".pro-container2");
const productTemplate = document.querySelector("#productTemplate");


export const showProductContainer = (products)=>{ 
    if(!products) {
        return false;
    }
    
    products.forEach((curProd) =>{
        const {cardNo , name , category , price , image , stock} = curProd;//This is the destructuring of the
        //properties of each product object 
        
        
        //Below we clone the template 
        //Use document.importNode() to clone the tmeplate container  for each product 
        const productClone = document.importNode(productTemplate.content , true);
        
        //For giving unique ids to the cards , we will use the setAttribute method :
        /*This setAttribute function will now set the values of each card to respective 
        cardNo which is obtained after destructuring*/
        productClone.querySelector("#cardValue").setAttribute("id" , `card${cardNo}`);



        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productPriceElement").textContent = `$${price}`;
        productClone.querySelector(".category").textContent = category;

//QUANTITY OF ELEMENT :
        const stockElement = productClone.querySelector(".stockElement");
        stockElement.addEventListener("click" , (event)=>{
            homeQuantityToggle(event , cardNo , stock);
        });


// ADD TO CART BUTTON :
        const cartPro = productClone.querySelector(".cart-pro");
        cartPro.addEventListener("click" , (event) =>{
            addToCart(event , cardNo , stock);
        });




        productContainer.append(productClone);
        


        
    })
};