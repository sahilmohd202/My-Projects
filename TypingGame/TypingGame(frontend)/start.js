import {BrowserRouter,Routes,Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage.js';
import StartTest from './pages/StartTest.js';
import Result from './pages/Result.js';
import PageNotFound from './pages/PageNotFound.js';
function Start(){
   return <BrowserRouter>
            <Routes>
               <Route path="/" element={<WelcomePage/>}/>
               <Route path="/start/:minute/:level" element={<StartTest/>}/>
               <Route path="/result/:result" element={<Result/>}/>
               <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          </BrowserRouter>;
}
export default Start;