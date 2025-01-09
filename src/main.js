import './style.css';

import products from './api/products.json';
import { showProductContainer } from './homeProductCard';

// Display products
// console.log(products); 
showProductContainer(products);

