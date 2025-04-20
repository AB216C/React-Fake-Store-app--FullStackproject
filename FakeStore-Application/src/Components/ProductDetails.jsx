import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function ProductDetails() {
  const {productid} = useParams()
  const [productData,setProductData]=useState({})



  const navigate = useNavigate()

  const handleBackButton=()=>{
    navigate("/products")
  }

  const deleteItem=()=>{ if(window.confirm("Do you want to remove this item?")){
    fetch('https://fakestoreapi.com/products/'+productid, {
      method:"DELETE",
      headers: {
        "content-type":"application/json"
      }
    })

    .then((response)=>{
      alert("The Product  was deleted successfully")
      navigate("/products")
    })

    .catch((error)=>{
      console.log("Unable to delete the product", error)
    })
   
  }
  }

  useEffect(()=> {
    fetch('https://fakestoreapi.com/products/'+productid)
    .then((response)=>response.json())
    .then((data)=>{setProductData(data)})
    .catch((error)=>{console.log("Error occured fetching api:",error)})

  },[])


  return(
    <div className="ProductDetails">

      <button onClick={()=>{handleBackButton()}} className="btn btn-lg btn-dark my-5 fs-1">Take Me Back</button>

      {
        productData&&Object.keys(productData).length>0&& (<div>
        <ul>
          <li> {productData.image && <img src={productData.image}/> } </li>
          <li> <strong>Title:</strong>  {productData.title}</li>
          <li><strong>Price:</strong> $ {productData.price}</li>
          <li> <strong>Category:</strong> {productData.category}</li>
          <li> <strong>Description:</strong> {productData.description}</li>
        </ul>

        <div className="my-4">
        <button className="btn btn-lg btn-primary mx-5">Add to cart</button>
        <button onClick={()=>deleteItem(productData.id)} className="btn btn-danger btn-lg mx-3" >Delete the item from listing</button>
        </div>
 
      </div>)
      }

     
    </div>
  )
}

export default ProductDetails