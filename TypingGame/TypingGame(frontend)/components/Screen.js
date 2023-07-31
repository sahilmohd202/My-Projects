import "./Screen.css";
function Screen(props){
    const {width,height,enteredcorrecttext,wrongenteredtext,pendingtext}=props;
    const style={
        width:width,
        height:height
    };
    return <div id="Screen" style={style}>
        <span id="correcttext">{enteredcorrecttext}</span>
        <span id="wrongtext">{wrongenteredtext}</span>
        <span>{pendingtext}</span>
    </div>;
}
export default Screen;