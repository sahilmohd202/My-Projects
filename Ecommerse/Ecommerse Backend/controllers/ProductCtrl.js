const ProductCollection=require('../models/ProductModel.js');




const addNewProduct=(req,res)=>{
 
   res.send("added");  
};




const getAllProducts=(req,res)=>{
    const {search}=req.query;

    //mongodb 
    //ProductCollection.find({$or:[{name:{$regex:`${search}`,$options:"i"}},{category:search}]})
ProductCollection.find({$or:[{name:{$regex:`[a-zA-Z0-9._]*${search}+[a-zA-Z0-9._]*`,$options:"i"}},{category:search}]})
.then(r=>{
    res.setHeader('Content-type','application/json');
    res.statusCode=201;
    res.send(r);
})
.catch(e=>{
    res.setHeader('Content-type','application/json');
    res.statusCode=500;
    res.send({ok:0,error:e});
});

};



const getProductInfo=(req,res)=>{
    const {pid}=req.params;
// mongodb
     ProductCollection.find({_id:pid}).then(r=>{
        res.setHeader('Content-type','application/json');
        res.statusCode=201;
        res.send(r[0]);
     }).catch(e=>{
        res.setHeader('Content-type','application/json');
        res.statusCode=500;
        res.send({ok:0,error:"internal server error"});
     });
    
};





module.exports={ getAllProducts,getProductInfo,addNewProduct};