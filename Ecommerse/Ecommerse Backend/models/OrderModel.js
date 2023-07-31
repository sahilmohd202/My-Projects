const mongoose=require('mongoose');
const OrderModel=mongoose.model("Orders",new mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    customername:String,
    phone:Number,
    address:String,
    placedon:Date,
    deliveryon:Date
}));
module.exports=OrderModel;