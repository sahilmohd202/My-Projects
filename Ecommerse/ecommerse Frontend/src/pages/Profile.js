import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profile.css';
import { faCircleCheck, faEnvelope, faHome, faPhone, faShare, faUser } from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState,useRef} from 'react';
import axios from 'axios';
function Profile()
{
    const [userInfo,setInfo]=useState({name:'',mobile:'',email:'',address:''});
    const jsondata={
        name:userInfo.name,
        mobile:userInfo.mobile,
        email:userInfo.email,
        address:userInfo.address
    };
   
    const savePopUp=useRef(null);
     
   




    const save=()=>{
        const jsondata={ 
            name:userInfo.name,
            mobile:userInfo.mobile,
            address:userInfo.address
        };
        axios.put("http://localhost:5000/users",jsondata,{"Content-type":"application/json","withCredentials":true}).then(r=>{
        console.log(r.data);    
        if(r.data==='saved')
            {
                savePopUp.current.style.animationName="savepopup";
                savePopUp.current.style.display="flex";
            }
        }).catch(e=>console.log(e));
    }
    
    
    return <><div id='Profile'>
        <div id='ProfileInfo'>
         
           <fieldset>
            <legend className='label'>Name</legend>
            <FontAwesomeIcon icon={faUser}/><input  placeholder='enter your name' value={userInfo.name} onChange={(e)=>{    setInfo({...userInfo,name:e.target.value});}}   type='text' className='textfield'/>
            </fieldset>
            <fieldset>
            <legend className='label'>Phone</legend>
            <FontAwesomeIcon icon={faPhone}/><input  placeholder='enter your mobile number' value={userInfo.mobile} onChange={(e)=>{    setInfo({...userInfo,mobile:e.target.value});}}   type='text' className='textfield'/>
            </fieldset>
            <fieldset>
            <legend className='label'>Email</legend>
            <FontAwesomeIcon icon={faEnvelope}/><input  placeholder='enter your email address' value={userInfo.email}  onChange={(e)=>{    setInfo({...userInfo,email:e.target.value});}}   type='email' className='textfield'/>
            </fieldset>
            <fieldset>
            <legend className='label'>Address</legend>
            <FontAwesomeIcon icon={faHome}/><input  placeholder='enter your Address' value={userInfo.address} onChange={(e)=>{    setInfo({...userInfo,address:e.target.value});}}   type='text' className='textfield'/>
            </fieldset>
            <button className='savebtn' onClick={()=>save()}><FontAwesomeIcon icon={faShare} />SAVE</button>
       </div>
    </div>
    <div id='savedpopup' ref={savePopUp}><FontAwesomeIcon icon={faCircleCheck}/>saved</div>
    </>
}
export default Profile;