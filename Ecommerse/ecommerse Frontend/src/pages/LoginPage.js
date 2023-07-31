import './LoginPage.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLock, faUser, faWarning,faExclamation, faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {useState,useRef,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { C1 } from '../App';
function LoginPage(){
    const X=useContext(C1);
    const [credentials,setCredentials]=useState({email:'',password:''});
    const [isInvalid,invalid]=useState(false);   // initally no error box is visible.
    const [isInCompleted,inCompleted]=useState(false);  // initally no warning box is visible.
    const loadingbar=useRef(null);
    const nonetwork=useRef(null);
    const checkIsAllGiven=()=>{
         return (credentials.email!==''&&credentials.password!=='');  
    }
   
    const navigateTo=useNavigate();
   


     const login=(e)=>{
        e.preventDefault();  //cancels the form submission.
           if(checkIsAllGiven())
           {  // email and password are provided.
                  loadingbar.current.style.display='flex';    //visible the loading cursor.
              const data={
                  email:credentials.email,
                  password:credentials.password
              };
                  
            //   send data to the server.

               axios({
                method:"post",
                url:"http://localhost:5000/users/login",
                data:data,
                headers:{ "Content-type":"application/json"  },
                withCredentials:true
               }).then(r=>{
                if(r.data==='success')
                      {
                           invalid(false);
                           window.open('/','_self');
                      }
                      else 
                      {
                          invalid(true);     // email and password are found invalid. 
                      }
               }).catch(e=>{
                       console.log(e);
                       loadingbar.current.style.display='none';
                       nonetwork.current.style.display='flex';
               });

                  nonetwork.current.style.display='none';

                  inCompleted(false);
           }
           else
           {  // either email or password or both are not provided.
               inCompleted(true);
           }
     };





    return <div id='loginpage'>
             <form onSubmit={login}>
                <p id='label'>Login In</p>
                <fieldset>
                    <legend>email</legend>
                    <FontAwesomeIcon icon={faUser}/><input type='email' placeholder='enter your email'    onChange={(e)=>setCredentials(pr=>({...pr,email:e.target.value.trim()}))}   />
                </fieldset>
                <fieldset>
                    <legend>password</legend>
                    <FontAwesomeIcon icon={faLock}/><input type='password' placeholder='enter your password'  onChange={(e)=>setCredentials(pr=>({...pr,password:e.target.value.trim()}))}       />
                </fieldset>
                <div ref={nonetwork} id='nonetwork'><FontAwesomeIcon icon={faCircleXmark}/>&nbsp;&nbsp;unable to connect to the server.</div>
                <div ref={loadingbar} id='loading'><FontAwesomeIcon icon={faSpinner}/></div>
                <div id='btns'><input type='button' value='Sign Up'/><input type='submit' value='Log In'/></div>
           {isInvalid&&<div id="errorbox"><FontAwesomeIcon icon={faWarning}/>invalid email and password</div>  }
            {isInCompleted&&<div id="warningbox"><FontAwesomeIcon icon={faExclamation}/>please enter all required details</div>}
             </form>
    </div>
}
export default LoginPage;