export function Meter({width,height,min,max,value,lowAt,highAt,optimum,text})
{
    const bgcolor=(value<=lowAt)?"orange":(value>lowAt && value<=optimum)?"lightgreen":(value>=highAt)?"darkgreen":"black";
    const metervalue=Math.ceil(((value-min)/(max-min))*100)+"%";

    


    const style1={
          width:width,
          height:height,
          border:"0.5px solid gray",
          textAlign:"left",
    };
    const style2={
         maxWidth:metervalue,
         width:"100%",
         height:"100%",
         backgroundColor:bgcolor
         

    };
    const style3={
          color:bgcolor,
          fontFamily:"Lucida Sans Unicode",
          fontWeight:"bold",
          fontSize:"2vh",
          textAlign:"center",
          textTransform:"uppercase"
    };
    return <div id="meter" style={style1}><div style={style2}></div><p style={style3}>{text}</p></div>;
}