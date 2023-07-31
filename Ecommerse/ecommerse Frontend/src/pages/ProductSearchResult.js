import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import ProductList from '../components/ProductList.js';
import axios from "axios";
import './ProductSearchResult.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
function ProductSearchResult()
{
    const [products,setProducts]=useState(null);
    const params=useParams();
    const {search}=params;
    
    useEffect(()=>{
      axios.get(`http://localhost:5000/products?search=${search}`).then(r=>{
        setProducts(r.data);
    }).catch(e=>console.log(e));
    },[search]);





  return <div id='productsearchresult'>
           { 
              (products===null)?<div id='psrloading'><FontAwesomeIcon icon={faSpinner}/></div>:<ProductList collection={products}/>
           }
  </div>;
}
export default ProductSearchResult;