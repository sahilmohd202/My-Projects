import "./Product.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
function Product({name,price,rating,discount,image,id})
{
     const navigateTo=useNavigate();

    return <div id='Product'   onClick={()=>navigateTo(`/product/${id}`)}>
            <div id='Product_image'> <img src={image}/>  </div>
            <div id='details'> 
               <p id='product_name'>{name}</p>
               <p id="product_rating">{rating}&nbsp;<FontAwesomeIcon icon={faStar} /></p>
               <p><span id='product_price'>&#8377;{price}</span><span id="product_discount">{discount}%</span></p>
            </div>
    </div>;
}
export default Product;