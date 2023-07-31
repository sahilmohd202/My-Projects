const express=require('express');
const UserCtrl=require('../controllers/UserCtrl.js');
const UserRoute=express.Router();
const cookieParser=require('cookie-parser');

UserRoute.get('/:token',cookieParser(),UserCtrl.getUserInfo);   // 'users/token=asdfasdfasdfasdfasdfasdfasdfasdf'
UserRoute.post('/login',express.json(),cookieParser(),UserCtrl.login);   // 'users/login'   get the token if email and password are valid.  '/users'
UserRoute.post('/',express.json(),UserCtrl.signUp);   // creating new user at the server.  (SignUp)     '/users'
UserRoute.delete('/',express.json(),cookieParser(),UserCtrl.deleteAccount); // delete user account at the server (account deletion)  '/users'

UserRoute.get('/:uid/orders',cookieParser(),UserCtrl.getAllOrdersInfo); //'users/234Ea-098/orders'    // user can know all his ordered products
UserRoute.post('/:uid/orders',cookieParser(),express.json(),UserCtrl.placeOrder);  // 'users/asdfsde243/orders'   // user can place a new order.
UserRoute.delete('/:uid/orders/:oid',cookieParser(),UserCtrl.deleteOrder);  // 'users/234su1ee/orders/2oe12' // user can cancel his order.

UserRoute.put('/',express.json(),cookieParser(),UserCtrl.updateUserInfo);   //'users/'

module.exports=UserRoute;

//  /users/login + token                 



// /users/login                                 post: login  
// /users/23423423@aTu                          get : get user info.
// /users/                                      post : signup 

//   '/users/23423Ae0#aP1Qx/orders'            get :  get all orders info.    
//   '/users/23423dfAew0/orders'               post : place an order.
//    '/users/234234e01/orders/rE1s22'         delete : delete order.