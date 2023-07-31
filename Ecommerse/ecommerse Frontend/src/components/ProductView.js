import "./ProductView.css";
import ImageSlider from "./ImageSlider";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar,faCartShopping,faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { C1 } from "../App";
import {useContext} from 'react';
function ProductView({product_name,product_price,product_rating,product_discount,product_images}){
     
   const X=useContext(C1);

   const book=function(){
      // if we have token 
   let body={
         "name":product_name,
         "image":product_images[0],
         "price":product_price,
         "placedon":`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`,
          "deliveryon":"2022-05-20"
   };
   let headersjson={
       "Content-type":"application/json",
   };
    axios.post(`http://localhost:5000/users/asdx23/orders`,body,{headers:headersjson,withCredentials:true})
    .then(r=>{
         console.log(r);
         console.log('placed now');
    })
    .catch(e=>{
         console.log('your error',e);
    });

   };





     return <div id="ProductView" >
               <div id="productdetails">
                  <div id='details'>
                   <p id='product_name'>{product_name}</p>
                   <p id="product_price">&#x20b9;{product_price}</p>
                   <p id="product_rating">{product_rating}&nbsp;<FontAwesomeIcon icon={faStar} /></p>
                   <p id="product_discount">{product_discount}%</p>
                  </div>  
                  <div id='btns' > <button id="addintocart" onClick={(e)=>{ 
                    
                     let cartitems=localStorage.getItem('cartitems');   // null '[a,b,c]' 'asdfsadfas'
                     try{
                     let collection=JSON.parse(cartitems);
                     // null , [a,b,c]
                       if(collection)
                       {  // collection is [a,b,c]
                              collection.push({pname:product_name,pimage:product_images[0],pprice:product_price,pquantity:1})  
                      }
                       else
                       {   // collection is null
                              collection=[{pname:product_name,pimage:product_images[0],pprice:product_price,pquantity:1}];
                       }

                       localStorage.setItem("cartitems",JSON.stringify(collection));

                     }catch(e)
                     {
                        console.log('collection is not array nor null');   
                     }
                   

                  } 
                  }><FontAwesomeIcon icon={faCartShopping}/>&nbsp;Add to Cart</button>
                  <button id="buynowbtn" onClick={()=>{
                       book();
                  }}><FontAwesomeIcon icon={faShoppingBag}/>&nbsp;Buy Now</button> </div>
               </div>
               <div id="productimages">
                      <ImageSlider images={product_images}/>
               </div>
     </div>
}
export default ProductView;