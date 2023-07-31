import "./TextField.css";
function TextField(props)
{
    const {width,height}=props;
    const style={
        width:width,
        height:height
    };


  return <div>
      <input autoFocus type="text" style={style} onChange={(e)=>{ if(e.target.value[e.target.value.length-1]==' '){ props.onInput(e.target.value); e.target.value=""; }   }}/>
  </div>;
}
export default TextField;