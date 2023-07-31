const express=require('express');
const ProductCtrl=require('../controllers/ProductCtrl.js');
const ProductRoute=express.Router();



ProductRoute.get('/',ProductCtrl.getAllProducts);  // '/products' or '/products?search=abc'  ...
ProductRoute.get('/:pid',ProductCtrl.getProductInfo);  //  '/products/redmi' , '/products/oppo 5g'  ...


ProductRoute.post('/',ProductCtrl.addNewProduct);  // '/products/'




module.exports=ProductRoute;