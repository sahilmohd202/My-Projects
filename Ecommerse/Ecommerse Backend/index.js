const express=require('express');
const cors=require('cors');
const ProductRoutes=require('./routes/ProductRoute.js');
const OrderRoutes=require('./routes/OrderRoute.js');
const UserRoutes=require('./routes/UserRoute.js');
const app=express();
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this specific origin
    credentials: true // Allow credentials (e.g. cookies...) to be sent along with the request
  }));
app.use('/users',UserRoutes);    // whenever server gets a request(get,post,put,patch,delete) on '/users/....'
app.use('/products',ProductRoutes);  //whenever server gets a request(get,post,put,patch,delete) on '/products/...' 
app.use('/orders',OrderRoutes);      // whenever server gets a request(get,post,put,patch,delete) on '/orders/...'
app.listen(5000,()=>console.log('ecommerse server is running on port : 5000'));

