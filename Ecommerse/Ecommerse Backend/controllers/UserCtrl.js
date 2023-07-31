const Users=require('../models/UserModel.js');
const crypto=require('crypto');
const Orders=require('../models/OrderModel.js');
const jwt=require('jsonwebtoken');
const KEY="mdsahilmdsahilmdsahil";
function login(req,res)
{
    // check token is there in the cookie .
    if(req.cookies.token)
    {    // token!=undefined||null
        const {token}=req.cookies;
        jwt.verify(token,KEY,(error,decoded)=>{
            if(error===null)
            {
                const {email,hashvalue}=decoded;
                Users.find({email:email,password:hashvalue}).then(r=>{
                    
                    if(r.length===1)
                    {   
                       res.status(200);
                       res.send(r[0]);
                    }
                    else
                     res.send('internal server error');
                }).catch(e=>res.send('internal server error'));
                
            }
            else
            {
                res.send('internal server error');
            }
        });
       
    }
    else
    {   // if token is not there then relogin   
    const {email,password}=req.body;       
    const hash=crypto.createHash('sha256');
    hash.update(JSON.stringify({email,password}));
    const hashvalue=hash.digest("hex").toString();
    Users.find({email:email,password:hashvalue}).then(r=>{
      
       if(r.length===1)
       {  // when the login is success.
        // because login is successfully generate token and store it the browser in the form of cookie , so that next time user need not to fill the email and password again.
        // we are generating token using jwt taking hashvalue of the password + email as input.
        let token=jwt.sign({email,hashvalue},KEY);
        res.cookie("token", token, { maxAge: 60000*60 });
        res.status(201);
        res.send('success');
       }
       else
       {
          res.status(200);
          res.send('invalid email and password');
       }
      
    }).catch(e=>{
       res.status(501);
       res.send('internal server error');
   });

}


}



function getUserInfo(req,res)
{
     const {token}=req.params;
     jwt.verify(token,KEY,(error,decoded)=>{
         if(error===null)
         {
            const {email,hashvalue}=decoded;
            Users.find({email:email,password:hashvalue}).then(r=>{
                if(r.length===1)
                {
                    res.status(200,{"Content-type":"application/json"});
                    res.send(r[0]);
                }
                else
                  res.send("internal server error.");
                
            }).catch(e=>res.send("internal server error"));

         }
         else
         {
            res.send('please relogin again. token mismatch');
         }
     });



 
}








function signUp(req,res)
{
     const {email,password,name,address,phone}=req.body;       
     const hash=crypto.createHash('sha256');
     hash.update(JSON.stringify({email,password}));
     const hashvalue=hash.digest("hex").toString();
     Users.create({password:hashvalue,email:email,name:name,address:address,phone:phone,orders:[]}).then(r=>{
        res.status(201);
        res.send('sign up success.');
     }).catch(e=>{
        res.status(501);
        res.send('internal server error');
    }); 
  
}  // creating a new user and storing hash value in the mongodb database.

function deleteAccount(req,res){
    // we will take token from the cookie. 
    const {token}=req.cookies;
    console.log("getting cookie from client : "+token);
     Users.deleteOne({user:token}).then(r=>{
          if(r.deletedCount===1)
          {  // user account is deleted.
              res.status(201);
              res.send('account deleted');
          }
          else
          {   // token is invalid or token not present.
              res.status(403);
              res.send('internal server error');
          }
          
     }).catch(e=>res.send('internal server error'))
}



function placeOrder(req,res){
    const {token}=req.cookies;
    const ProductInfo=req.body;
    if(token)  // if there is a token available then 
    {
      jwt.verify(token,KEY,(error,decoded)=>{
           if(error===null)
           {
             // go to database find user with such email and place order.
              const {email,hashvalue}=decoded;
              Users.findOne({email:email,password:hashvalue}).then(USER=>{
                console.log(USER);
                USER.orders.push({
                    name:ProductInfo.name,
                    image:ProductInfo.image,
                    price:ProductInfo.price,
                    phone:USER.phone,
                    address:USER.address,
                    placedon:ProductInfo.placedon,
                    deliveryon:ProductInfo.deliveryon,
                    productstatus:'booked only'
                
                });
                USER.save()
                .then(()=>{
                    Orders.create({name:ProductInfo.name,image:ProductInfo.image,price:ProductInfo.price,customername:USER.name,phone:USER.phone,address:USER.address,placedon:ProductInfo.placedon,deliveryon:ProductInfo.deliveryon})
                    .then(()=>{ res.send('order is booked')  })
                    .catch(e=>{ res.send('some problem facing while booking order.')  });
                    
                })
                .catch(e=>res.send('problem while saving the product in database'))
            
              }).catch(e=>{ res.send('internal server error while placing your product');   })



            }
           else
           {console.log(error); res.send('some error with token')}
      })
    }    
    else   // if the token is not present then user should relogin and generate new token.
    {
        res.send('please relogin again');
    }

}   // to book an order.

function getAllOrdersInfo(req,res){
    Users.find({}).then(r=>{
        res.send(r[0].orders);
    }).catch(e=>res.send('internal server error'));
}
function deleteOrder(req,res)
{
   res.send('order is deleted');
}




function updateUserInfo(req,res)
{      
     const {token}=req.cookies;
     const {name,mobile,address}=req.body;
     jwt.verify(token,KEY,(error,decoded)=>{
        if(error===null)
        {
            const {email,hashvalue}=decoded;
            Users.findOne({email:email,password:hashvalue}).then(User=>{
                User.name=name;
                User.address=address;
                User.phone=mobile;
                User.save().then(r=>{
                    res.send('saved');
                }).catch(e=>res.send('unable to update data'));
            }).catch(e=>console.log(e));
           
        }
        else
             res.send('please relogin again.');
    
     });
      
}









module.exports={signUp,deleteAccount,login,placeOrder,getAllOrdersInfo,deleteOrder,getUserInfo,updateUserInfo};