const Orders=require('../models/OrderModel.js');
function placeOrder(req,res){
    const {name,image,price,customername,phone,address,placedon,deliveryon}=req.body;
   Orders.create({
    name:name,
    image:image,
    price:price,
    customername:customername,
    phone:phone,
    address:address,
    placedon:new Date(placedon),
    deliveryon:new Date(deliveryon)
   }).then((r)=>{
          res.status(200);
          res.send('success order placed');
   }).catch(e=>{ console.log(e); res.status(500); res.send('internal server error'); });

}   // to book an order.

function getAllPlaceOrders(req,res){
    Orders.find({}).then(r=>{
           res.send(r);
    }).catch(e=>res.send('internal server error'))
}  // to get all ordered product information for further processing.
module.exports={placeOrder,getAllPlaceOrders}