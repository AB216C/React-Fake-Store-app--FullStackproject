import NavigationPage from "./NavigationPage"
import { useEffect, useState } from "react"
import { Link, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


function ProductListing(){

  const [products,setProducts]=useState("")
  const [cart,setCart]=useState([])
  const [showCart,setShowCart]=useState(false)
  const navigate =useNavigate()

  const showDetails=(id)=>{
    navigate("/product/detail/"+id)
  };

  const handleProductUpdate=(id)=> {
    navigate("/product/update/"+id);
  }

  const handleAddToCart=(product)=> {
    setCart(prevCart=>[...prevCart,product])
  }

  const fetchProducts=()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=>setProducts(data))
    .catch((error)=>console.log("Unable to fetch Data",error))
  }

  useEffect(()=>{
    fetchProducts()
  },[])


  return(
  
    <div className="ProductListing">
      <NavigationPage/>
      <p>Product Listing Page</p>

      <button onClick={()=>setShowCart(!showCart)} >Cart:{cart.length} items </button>

      {showCart&& cart.map((product,index)=> 
      <li key={index} >{product.title}:${product.price} </li>
      )}

      <div className="ProductsList">

        {
          products && products.map((product,index)=>(
            <ul key={product.id} >
            <li>{product.title}</li>
            <li>{product.image && <img src={product.image}/>}</li>
            <li>${product.price}</li>
            <button onClick={()=>showDetails(product.id)} >View Details</button>
            <button onClick={()=>handleProductUpdate(product.id)} >Update info</button>
            <button onClick={()=>handleAddToCart(product)}>Add to cart</button>

            </ul>
          ))
        }

      </div>

      <Link to="/product/add" >Add a New Product</Link>

    </div>
  )
}

export default ProductListing