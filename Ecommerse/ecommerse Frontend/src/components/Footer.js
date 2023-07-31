import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBlog, faCalendarDay, faCircleInfo, faEarthAmericas,faGears, faNewspaper, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
function Footer(){
    return <div id='footer'>
             <div class='section'>
                  <p>ONLINE STORE</p>
                  <a href="#"><FontAwesomeIcon icon={faUser}/>About</a>
                  <a href="#"><FontAwesomeIcon icon={faEarthAmericas}/>Careers</a>
                  <a href="#"><FontAwesomeIcon icon={faCalendarDay}/>Events</a>
                  <a href="#"><FontAwesomeIcon icon={faNewspaper}/>News and Headlines</a>
                  <a href="#"> <FontAwesomeIcon icon={faPhone}/> Contact info</a>
            </div>

            <div class='section'>
                  <p>LEARN AND SUPPORT</p>
                  <a href="#"><FontAwesomeIcon icon={faCircleInfo}/>Help and API docs</a>
                  <a href="#"><FontAwesomeIcon icon={faBlog}/>Blog</a>
                  <a href="#"><FontAwesomeIcon icon={faGears}/>  Technical Chat Support</a>
                 
            </div>

            <div class='section'>
                  <p>SUPPORT</p>
                  <a href="#"> Product Supports</a>
                  <a href="#">Communities</a>
                  <a href="#">Report Abuse</a>
                  
            </div>

            
            
    </div>
}
export default Footer;