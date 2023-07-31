import "./ImageSlider.css";
import {useState} from 'react';
function ImageSlider({images}){
   const [imageno,setImage]=useState(0);
    return <div id='ImageSlider'>
             <div id="slider">   
                  <img src={images[imageno]} />
             </div>
             <div id="buttons">
                  {
                    images.map((img,index)=><img style={{border:`3px solid ${(imageno===index)?"rgb(145, 53, 53)":"white"}`}} src={img} key={index} onClick={()=>{  setImage(index);   }}  />)
                  }
             </div>
    </div>
}
export default ImageSlider;