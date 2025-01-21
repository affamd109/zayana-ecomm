import './style.css';

import products from './api/products.json';
import { showProductContainer } from './homeProductCard';

//making hamburger menu :

const bar = document.querySelector("#bar");
const nav = document.querySelector('#navbar');
const close = document.querySelector('#close');

if(bar){
    bar.addEventListener('click' , () =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click' , () =>{
        nav.classList.remove('active');

    })
}



// Display products
// console.log(products); 
showProductContainer(products);

