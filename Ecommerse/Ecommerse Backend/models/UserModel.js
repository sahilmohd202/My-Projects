const mongoose=require('mongoose');
const UserModel=mongoose.model('Users',new mongoose.Schema({
    password:String,
    email:String,
    name:String,
    address:String,
    phone:Number,
    orders:Array,  
}));
module.exports=UserModel;