const cartNo = document.querySelector("#cartNo");

export const updateNavCart = (localStorageProduct) =>{
 
const len = JSON.parse(localStorage.getItem("cartProductsLS")).length;
return (cartNo.innerHTML = len);



};