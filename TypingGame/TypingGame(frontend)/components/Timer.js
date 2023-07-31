import {useState,useEffect} from 'react';
import "./Timer.css";
function Timer(props){
    
    const [time,setTime]=useState(props.time*60);
    useEffect(()=>{
           if(time==0)
           {
              props.fire();
           }
    },[time]);
    setTimeout(()=>{
        setTime(time-1);
    },1000);
    
    return<div id="Timer">{time}</div>;
}
export default Timer;