import './BookedOrder.css';
function BookedOrder(props){
    
    return <div id='BookedOrder'>
            <div class='item section1'><img id='pimage' src={props.image}/></div>
            <div class='item section2'>
                <div><p>{props.name}</p> <p>&#x20b9;{props.price}</p> </div>
                <div style={{color:"green"}}>{props.status}</div>
            </div>
            <div class='item section4'><div><span className='label'>Placed on:</span> {props.placedon}</div> <div><span className='label'>Delivery on:</span> {props.deliveryon}</div> </div>
            <div class='item section5'><span className='label'>Address : </span>{props.address}</div>
    </div>
}
export default BookedOrder;