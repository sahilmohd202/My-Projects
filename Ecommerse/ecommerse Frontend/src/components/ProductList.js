import "./ProductList.css";
import Product from "./Product";
function ProductList({collection})
{
    return <div id="productlist">
         {
              collection&&collection.map((product,index)=><Product id={product._id} name={product.name} image={product.images[0]} price={product.price} rating={product.rating} discount={product.discount}/>)
         }
    </div>;
}
export default ProductList;