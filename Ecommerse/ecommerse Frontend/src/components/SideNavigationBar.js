import "./SideNavigationBar.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBagShopping, faClose, faHome, faSignIn, faSignOut, faUser} from '@fortawesome/free-solid-svg-icons';
import SampleImg from './OIP.jpg';
import {useNavigate} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import { C1 } from "../App";
import axios from "axios";
import { logout } from "./Header";
function SideNavigationBar(props){
 const navigateTo=useNavigate();
 const {open,setSideNavigationBar,divref}=props;
 const userProfilePic=SampleImg;
 const X=useContext(C1);
 let signin=false;
 if(X[0]!==null)
 {
     signin=(X[0].name!==undefined)?true:false;
 }

 if(open)
 {
     divref.current.style.filter='brightness(20%)';
 }
 console.log(X[0]);

 const logout=()=>{
  document.cookie="token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}



  return <div id='sidenavigationbar' style={{display:(open)?"flex":"none"}}>
            <div id='user'><img src={userProfilePic}/><p>{(signin)?X[0].name:"Welcome"}</p><div onClick={()=>{ setSideNavigationBar(false); divref.current.style.filter='none';   }}><FontAwesomeIcon icon={faClose}/></div>  </div>
            <div id='setting'>
                  <ul type='none'>
                    <li onClick={()=>{navigateTo('/'); setSideNavigationBar(false); divref.current.style.filter="none"; }}><p>Home</p><FontAwesomeIcon icon={faHome}/></li>
                    {(signin)&&<li  onClick={()=>{navigateTo('/order'); setSideNavigationBar(false);   divref.current.style.filter="none";   }}><p>My Orders</p>{(X[0].orders.length>0)?<span id='hasorders'><FontAwesomeIcon icon={faBagShopping}/><sup>{X[0].orders.length}</sup></span>:<FontAwesomeIcon icon={faBagShopping}/>}</li>}
                    {(signin)&&<li  onClick={()=>navigateTo('/profile')}><p>Profile</p><FontAwesomeIcon icon={faUser}/></li>}
                   {(signin)?<li onClick={()=>{  logout(); window.open('/','_self');  setSideNavigationBar(false); divref.current.style.filter='none'; }}  ><p>Sign out</p><FontAwesomeIcon icon={faSignOut}/></li>:  <li onClick={()=>{ setSideNavigationBar(false); navigateTo('/login'); divref.current.style.filter="none";  }}><p>Login In</p><FontAwesomeIcon icon={faSignIn}/></li>} 
                  </ul>
            </div>
  </div>
}
export default SideNavigationBar;