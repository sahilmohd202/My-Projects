import "./CartItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {useState,useEffect} from 'react';
function CartItem({name,image,price,deleteThis})
{   
    
    let q=1;
    let str=localStorage.getItem('cartitems');   // null '[a,b,c]' 'asdfasd'
    if(str)
    {  // '[a,b,c]' 'asdfasdf'
        try{
        let collection=JSON.parse(str);     // [a,b,c]<---'[a,b,c]'  error<---'asdfasd'
           let obj=collection.find((item)=>item.pname===name);    
            if(obj)
            {  // obj
                 q=obj.pquantity;
            }
        }
        catch(e)
        {
            console.log('error');
        }
    }

    const [cost,setCost]=useState(price);
    const [quantity,setQuantity]=useState(q);
    useEffect(()=>{
        if(quantity>=0)
        {   
            setCost(price*quantity);
            let str=localStorage.getItem('cartitems');   // null or '[a,b,c]' or 'asdfasdf'   
              try{
            let collection=JSON.parse(str);    //   [a,b,c]<---'[a,b,c]' null<---null  error<--'afsdfasd'
            if(collection)
            { // [a,b,c]
                let ci2u=collection.find((item)=>item.pname===name)   // obj or undefined
                if(ci2u)
                {   // obj
                  
                     collection.splice(collection.indexOf(ci2u),1,{...ci2u,pquantity:quantity})  
                     localStorage.setItem('cartitems',JSON.stringify(collection)); 
                     deleteThis(collection);  //rerender Cart Component.
                }
            }
              }catch(e){ console.log(e);}
        }
    },[quantity]);


   

    return <div id='CartItem'>
            <img  src={image}/>
            <p id='name'>{name}</p>
            <p id='price'>${cost}</p>
            <div id='quantity'><button onClick={()=>setQuantity(q=>(q>0)?q-1:0)}><FontAwesomeIcon icon={faMinus}/></button><span>{quantity}</span><button onClick={()=>setQuantity(quantity+1)}><FontAwesomeIcon icon={faPlus}/></button></div>
            <button id='delete' onClick={()=>{
                const str=localStorage.getItem('cartitems');   //  '[a,b,c]'  null  'dafsdfasdfasdfa'
                try
                {
                let collection=JSON.parse(str);    //   [a,b,c]<---'[a,b,c]'  or null<---null  or exception
                let index=collection.indexOf(collection.find((ci,index)=>{
                         return ci.pname.trim()===name;
                }));  
                collection.splice(index,1);      // updated collection
                collection=JSON.stringify(collection);      // '[a,b,c]'<---[a,b,c]
                 localStorage.setItem('cartitems',collection);   // saving into localStorage.
                 console.log(localStorage.getItem('cartitems'));
                    //deletion completion.
                    let cl=localStorage.getItem('cartitems');   // null , '[a,b,c]' , 'asdfasdf'
                    try{
                    cl=JSON.parse(cl);    //   null<--null , [a,b]<--'[a,b]' ,    error<---'asdfasdfa'
                    }catch(e)
                    {
                        cl=null;
                    }
                    deleteThis(cl);  
                }
                catch(e)
                {
                   console.log("str is neither null nor '[a,b,c]'")
                }




            }}><FontAwesomeIcon icon={faTrashCan}/></button>
    </div>
}
export default CartItem;