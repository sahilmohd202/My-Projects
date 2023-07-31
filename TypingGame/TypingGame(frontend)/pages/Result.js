import {useParams,Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePollVertical,faStar,faCircleXmark,faPenNib} from "@fortawesome/free-solid-svg-icons";
import "./Result.css";
import {Meter} from '../components/Meter';
function Result(){

    const {result}=useParams();
    const correct=result.split("@")[0];
    const wrong=result.split("@")[1];
    const total=result.split("@")[2];
    const wpm=result.split("@")[3];
    const accuracy=`${wpm} Words Per Minute ${(wpm<25)?"practise more to improve":(wpm<37)?"average speed":(wpm<51)?"accurate":"excellent"}`;
    return <div id="result">
         <center>
         <div id="report">
            <table width="100%" height="100%">
              <tr>
                <td align="center"> 
                <div id="resulticon"><FontAwesomeIcon icon={faSquarePollVertical}></FontAwesomeIcon></div>
            <p id="heading" class="labels">Test Completed.</p>
            <p class="labels"><FontAwesomeIcon icon={faStar}/>correct words :&nbsp;&nbsp;{correct}</p>
            <p class="labels"><FontAwesomeIcon icon={faCircleXmark}/>incorrect words :&nbsp;{wrong}</p>
            <p class="labels"><FontAwesomeIcon icon={faPenNib}/>total words :&nbsp;&nbsp;{total}</p><br/><br/>
            <Meter lowAt={30} highAt={60}  optimum={50} width="70%" height="20px" max={100} min={1} value={60} text={accuracy}/>            
                </td>
              </tr>
              <tr><td><Link to="/"><button id="repeattest">Repeat Test</button></Link></td></tr>
            </table>


          
    
            </div>
          </center>
    </div>;
}
export default Result;