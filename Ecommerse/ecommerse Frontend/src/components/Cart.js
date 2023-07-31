import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import CartItem from "./CartItem";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';


function Cart(props){
    const {divref,open}=props;
    let c=null;
    try{
    c=JSON.parse(localStorage.getItem('cartitems'));   // null or '[a,b,c]'  or 'asdfasdfas'
    }
    catch(e){
        console.log('localStorage.getItem() returning "asdfasdfasd"  ');
        c=null;
    }
    const [allcartitems,setCartItems]=useState(c);  
    
    return <div id='Cart'>
            <div id='ShoppingCart'>
                <div id='shoppingcartlabel'><p>Shopping Cart</p> <p>{Array.isArray(allcartitems)?allcartitems.length:0} Items</p></div>  
                <div id='cartitemcollections'>
                    {
                      (allcartitems&&allcartitems.length>0)?allcartitems.map(item=><CartItem deleteThis={setCartItems} name={item.pname} image={item.pimage} price={item.pprice}/>):<div style={{height:'100%',display:'flex',flexDirection:'column', justifyContent:"center", alignItems:"center"}}><div id='cartempty'><FontAwesomeIcon icon={faCircleXmark} /></div><p>cart is empty</p></div>
                    }
                </div>
            </div>
            <div id='OrderSummary'>
                <h2>Order Summary</h2>
                  <table border="1px"    bordercolor="darkgray" width="100%" cellPadding="20px">
                       <tr><td>Total items:</td><td>{(Array.isArray(allcartitems))?allcartitems.length:"no items"}</td></tr>
                       <tr><td>Total cost:</td><td>{
                           Array.isArray(allcartitems)?allcartitems.reduce((sum,item)=>{
                                   return sum+(item.pprice*item.pquantity);
                           },0):0
                        }</td></tr>
                  </table>
                  <div style={{display:'flex',flexDirection:'column'}}>
                  <button id='buynowbtn'>Buy Now</button>
                  <button id='closecartbtn' onClick={()=>{open(false); divref.current.style.filter='none';  }}>close</button>
                  </div>
            </div>
    </div>
}
export default Cart;
