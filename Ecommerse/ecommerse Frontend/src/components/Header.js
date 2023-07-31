import "./Header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faBook,faCapsules,faCarRear,faCartArrowDown,faCat,faChevronUp,faClapperboard,faGamepad,faMagnifyingGlass,faMobileAndroid,faShirt,faTv, faVolleyball} from '@fortawesome/free-solid-svg-icons';
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Cart from './Cart.js';
import {C1} from '../App.js';
import axios from "axios";

const logout=()=>{
   document.cookie="token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function Header(props){
   const X=useContext(C1);
   const navigateTo=useNavigate();
   const {setSideNavigationBar,divref}=props;
   const [isSearchBoxOpen,openSearchBox]=useState(false);
   const [isCartBoxOpen,openCartBox]=useState(false);
   const logo="https://irp-cdn.multiscreensite.com/d8da26d1/dms3rep/multi/ecommerce.png";
   const [searchvalue,setSearchValue]=useState('');
   let str=localStorage.getItem('cartitems');   // null '[a,b,c]' 'asdfasasd' 
   let totalcartitems=0;
   if(str)
   {
      try{
        let collection=JSON.parse(str);
        totalcartitems=collection.length;
      }catch(e){totalcartitems=0;}
   }
   let cartitems=totalcartitems;
   

   const search=(valuetosearch)=>{
      navigateTo(`/search/${valuetosearch}`);
   };

   useEffect(()=>{
      divref.current.style.filter=(isCartBoxOpen)?'brightness(20%)':'none';
   },[isCartBoxOpen]);

 
let signin=false;
 if(X[0]!==null)
 {
     signin=(X[0].name!==undefined)?true:false;
 }
   



    return <div>
      {isCartBoxOpen&&<Cart divref={divref} open={openCartBox}   />}
      <div id='Header' >
          <div id='sidemenubtn' onClick={()=>setSideNavigationBar(true)}><FontAwesomeIcon icon={faBars}/></div>
          <div id='logo'><img src={logo}/></div>
          <div id='searchbar' onClick={()=>{ if(isSearchBoxOpen){ setSearchValue(''); }  window.scrollTo(0,0); openSearchBox(c=>!c);   }}><FontAwesomeIcon icon={(isSearchBoxOpen)?faChevronUp:faMagnifyingGlass}/></div>
          <div id='cart' onClick={()=>{openCartBox(!isCartBoxOpen); }}><FontAwesomeIcon style={{color:(cartitems>0)?'rgb(121, 23, 23)':'rgb(102, 102, 102)'}} icon={faCartArrowDown}/><sub>{(cartitems)?cartitems:''}</sub></div>
          {(signin)?<div id='Signout' onClick={()=>{ 
            logout();
            }}>Sign out</div>:<div id='Signin' onClick={()=>{ navigateTo('/login'); }}>Sign in</div>}
    </div>
    
       <div id='searchHandle'  style={{display:(isSearchBoxOpen)?"block":"none"}}>
             <div> <input type='text' value={searchvalue}  onKeyUp={(e)=>{ if(e.key==='Enter'){  openSearchBox(false);      search(searchvalue);     }  }}   onChange={(e)=>{  console.log(e.target.value); setSearchValue(e.target.value);   }}/><button onClick={()=>{ openSearchBox(false);      search(searchvalue);  }}><FontAwesomeIcon icon={faMagnifyingGlass}/>&nbsp;Search</button>  </div>
             <div> 
              <p><FontAwesomeIcon icon={faMobileAndroid}/>SmartPhones and Mobiles</p>
              <p><FontAwesomeIcon icon={faTv}/>Electronics and home appliances</p>
              <p><FontAwesomeIcon icon={faGamepad}/>Gaming and Consoles</p>
              <p><FontAwesomeIcon icon={faShirt}/>Fashions</p>
              <p><FontAwesomeIcon icon={faBook}/>Books and Stationary</p>
              <p><FontAwesomeIcon icon={faCat}/>pets</p>
              <p><FontAwesomeIcon icon={faCapsules}/>Health and Care</p>
              <p><FontAwesomeIcon icon={faVolleyball}/>Games</p>
              <p><FontAwesomeIcon icon={faCarRear}/>Vechiles,bikes and cars</p>
              <p><FontAwesomeIcon icon={faClapperboard}/>Movies,Films and shows</p>
            </div>
       </div>
     
    </div>;
}
export {logout};
export default Header;