const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/EcommerseDB');
const Products=mongoose.model('Products',new mongoose.Schema({
           name:String,
           price:Number,
           rating:Number,
           discount:Number,
           images:Array,
           comments:Array,
           category:String
}));
module.exports=Products;