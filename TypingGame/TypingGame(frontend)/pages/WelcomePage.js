import {Link} from 'react-router-dom';
import {useState} from 'react';
import "./WelcomePage.css";
import mainlogo from "../raw/speedometer.jpg";
function WelcomePage()
{
    const [time,setTime]=useState(1);
    const [level,setLevel]=useState("easy");


    return <div id="WelcomePage">
     <h1 align="center">Typing <span>Test</span></h1>
        <center>
            <img id="mainlogo" src={mainlogo} /><br/>
        <select id="choosetime" onChange={(e)=>{ setTime(e.target.value); }} value={time}>
            <option value="1">1 minute</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
        </select>
        <Link to={`/start/${time}/${level}`}><button id="startbutton">Start Test</button></Link>
        <div style={{marginTop:"10px"}}> 
        <p style={{fontFamily:"Lucida Sans Unicode",color:"gray",fontSize:"12px",margin:"0px",marginBottom:"5px",textDecoration:"underline" }}>Difficulty Level</p>
       <label for="easy">Easy</label><input defaultChecked onChange={(e)=>{ setLevel(e.target.value);  }} id="easy" name="level" type="radio" value="easy"/>
       <label for="hard">Hard</label><input onChange={(e)=>{ setLevel(e.target.value);  }} id="hard" name="level" type="radio" value="hard"/>
       <label for="blind">Blind</label><input onChange={(e)=>{ setLevel(e.target.value);  }} id="blind" name="level" type="radio" value="blind"/>
       </div>
        </center>
    </div>;
}
export default WelcomePage;