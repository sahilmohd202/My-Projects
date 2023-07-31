import { useEffect } from 'react';
import './Ads.css';
import {useState,useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
function Ads(props){
const adv=useRef(null); 
const [scroll,setScroll]=useState(0);
const [images,setImages]=useState([]);
const [slide,setSlide]=useState(1);
useEffect(()=>{
    setImages(props.ads);   
    setSlide(0);   // initially first slide is visible.
    setScroll(0*parseInt(getComputedStyle(adv.current).width.slice(0,getComputedStyle(adv.current).width.length-2)));   // initially scroll at 0 position. 
    adv.current.style.height=(window.outerHeight<window.outerWidth)?"60vh":"50vh";
   
},[]);


useEffect(()=>{
      const tid=setTimeout(()=>{
        let slidde=(slide<images.length-1)?slide+1:0;
        setSlide(slidde);   // initially first slide is visible.
        setScroll(slidde*parseInt(getComputedStyle(adv.current).width.slice(0,getComputedStyle(adv.current).width.length-2)));   // initially scroll at 0 position. 
        adv.current.scrollLeft=(slidde)*parseInt(getComputedStyle(adv.current).width.slice(0,getComputedStyle(adv.current).width.length-2))
        
    },5000);

    window.addEventListener('resize',()=>{
        adv.current.style.height=(window.outerHeight<window.outerWidth)?"60vh":"50vh";
         
    });

    
return ()=>{
    clearTimeout(tid); 
 }
    
  },[slide])








const openbtnstyle={
    backgroundColor:"rgb(99, 28, 28)",
    border:"0px"
}
const closebtnstyle={
    backgroundColor:"darkgray",
    border:"0px"
}




return <div id="ads">
        

    <div style={{display:"flex"}}>
    <button  id='left' onClick={()=>{
                        let slidde=(slide>0)?slide-1:images.length-1;
                        setSlide(slidde);   // initially first slide is visible.
                        setScroll(slidde*parseInt(getComputedStyle(adv.current).width.slice(0,getComputedStyle(adv.current).width.length-2)));   // initially scroll at 0 position. 
                        adv.current.scrollLeft=(slidde)*parseInt(getComputedStyle(adv.current).width.slice(0,getComputedStyle(adv.current).width.length-2));

                    }}><FontAwesomeIcon icon={faAngleLeft}/> </button>


    <div ref={adv} id="advertisement"   onScroll={(e)=>{
               
        const blocksize=parseInt(getComputedStyle(adv.current).width.slice(0,getComputedStyle(adv.current).width.length-2))
            if(e.target.scrollLeft>=slide*blocksize+500)
               { 
                setSlide(cs=>cs+1);
               }
            if(e.target.scrollLeft<=slide*blocksize-500)
            setSlide(cs=>cs-1);
            setScroll(e.target.scrollLeft);

    }}> 
         
        {  
          images.map((item,index)=><div className='image' key={index}>
                   <div style={{backgroundImage:`URL(${item})`}}></div>
          </div>)
        }  
       
        
    </div>

    <button  id='right' onClick={()=>{  
                         let slidde=(slide<images.length-1)?slide+1:0;
                         setSlide(slidde);   // initially first slide is visible.
                         setScroll(slidde*parseInt(getComputedStyle(adv.current).width.slice(0,getComputedStyle(adv.current).width.length-2)));   // initially scroll at 0 position. 
                         adv.current.scrollLeft=(slidde)*parseInt(getComputedStyle(adv.current).width.slice(0,getComputedStyle(adv.current).width.length-2));

                    }}><FontAwesomeIcon icon={faAngleRight} /></button>



    </div>
    <div id="btn">
         {
            images.map((item,index)=><button key={index} style={(index===slide)?openbtnstyle:closebtnstyle}></button>)
         }
       
    </div>
  </div>

}
export default Ads;