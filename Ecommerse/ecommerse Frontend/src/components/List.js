import './List.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCaretLeft,faCaretRight, faWindowMinimize} from '@fortawesome/free-solid-svg-icons';
import {useState,useRef,useEffect} from 'react';
function List({name,products}){
   




   window.addEventListener("resize",(e)=>{
      let outerwidth=e.target.outerWidth;
      setLimit((outerwidth<=300)?1:(outerwidth<=600)?2:(outerwidth<=900)?3:(outerwidth<=1400)?4:5);
   });

   
  const [limit,setLimit]=useState((window.outerWidth<=300)?1:(window.outerWidth<=600)?2:(window.outerWidth<=900)?3:(window.outerWidth<=1400)?4:5);
  const [page,setPage]=useState(0);

  const totalpages=Math.ceil(products.length/limit);
   const btnstyle1={
    color:"rgb(206, 85, 85)"
   }
   const btnstyle2={
    color:"gray"
   }

    return <div>  <p id='listname'>{name}</p>  <div id='List'>
    <div class='btns' style={(page>0)?btnstyle1:btnstyle2}   onClick={(e)=>{       setPage(pc=>(pc===0)?0:pc-1);     }}> <FontAwesomeIcon icon={faCaretLeft}/>    </div>  
         <div id='container'>
            {
                products.slice(page*limit,page*limit+limit).map((item,index)=>{
                     return <div class='product' key={index}>
                    <img src={item.image} />
                       <p>{item.name}</p>
                  </div>;
                })
            }

         </div>
    <div class='btns' style={(page+1==totalpages)?btnstyle2:btnstyle1} onClick={(e)=>{    setPage(pc=>(pc+1===totalpages)?pc:pc+1);   }}> <FontAwesomeIcon icon={faCaretRight}/>   </div>  
    </div></div>
    
}
export default List;