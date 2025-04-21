import NavigationPage from "./NavigationPage"
import { useEffect, useState } from "react"
import { Link, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


function ProductListing(){

  const [products,setProducts]=useState("")
  const [cart,setCart]=useState([])
  const [showCart,setShowCart]=useState(false)
  const [loading,setLoading]=useState(false)
  const navigate =useNavigate()

  const showDetails=(id)=>{
    navigate("/product/detail/"+id)
  };

  const handleProductUpdate=(id)=> {
    navigate("/product/update/"+id);
  }

  const handleAddToCart=(product)=> {
    setCart(prevCart=>[...prevCart,product])
    alert(`${product.title} added to cart successfully`)
  }

  const fetchProducts=()=>{
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=>setProducts(data))
    .catch((error)=>console.log("Unable to fetch Data",error))
    setLoading(false)
  }

  useEffect(()=>{
    fetchProducts()
  },[])


  return(
  
    <div className="ProductListing">
      <NavigationPage/>

      {loading&&<p>Loading...</p>}

      <button onClick={()=>setShowCart(!showCart)} className="btn btn-dark fs-1 mt-4"> View Cart:{cart.length} items </button>

      {showCart&& cart.map((product,index)=> 
      <ul><li key={index} className="bg-secondary me-4" >{product.title}:&nbsp;${product.price} </li>
      </ul>
      )}

      <div className="ProductsList">


        {
          products && products.map((product,index)=>(
            <ul key={product.id} >
            <li>{product.title}</li>
            <li>{product.image && <img src={product.image}/>}</li>
            <li>${product.price}</li>
            <button onClick={()=>showDetails(product.id)} className="btn btn-lg btn-info mx-3">View Details</button>
            <button onClick={()=>handleProductUpdate(product.id)} className="btn btn-lg btn-warning mx-3" >Update info</button>
            <button onClick={()=>handleAddToCart(product)} className="btn btn-lg btn-dark mx-3">Add to cart</button>

            </ul>
          ))
        }

      </div>

      <Link to="/product/add" className="btn btn-secondary fs-3 mb-4" >Add a New Product</Link>

    </div>
  )
}

export default ProductListing