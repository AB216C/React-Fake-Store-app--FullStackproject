import 'bootstrap/dist/css/bootstrap.css';
import NavigationPage from "./NavigationPage"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const [title, setTitle] = useState("")
  const [price,setPrice] = useState("")
  const [description,setDescription] = useState("")
  const [category, setCategory] = useState("")
  

  const navigate = useNavigate("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    const productData = {title, price, description, category}
    // console.log(productData)
    // console.log(title)
    // console.log(price)
    // console.log(description)
    // console.log(category)
    fetch('https://fakestoreapi.com/products', {
      method:"POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(productData)
    },[])


    .then((response)=>response.json())
    .then((data)=>console.log(data))
    alert("Product added successfully")
    navigate("/products")
  
    .catch((error)=>{
      console.log("Unable to add the product data", error)
      
    })
  }


  return(
    <div className="px-5 py-5" >
      <NavigationPage/>

      <h1 className="fw-bolder" >Add a Product</h1>
  
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" className="form-control" id="title" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
        </div>

        <div>
          <label htmlFor="price">Price:$ </label>
          <input type="text" className="form-control" id="title" name="title" value={price} onChange={e=>setPrice(e.target.value)} />
        </div>

        <div>
        <label htmlFor="description">Description: </label>
        <input type="text" className="form-control" id="title" name="title" value={description} onChange={e=>setDescription(e.target.value)} />
        </div>

        <div>
          <label htmlFor="category">Category: </label>
          <input type="text" className="form-control" id="title" name="title" value={category} onChange={e=>setCategory(e.target.value)} />
        </div>

        <br/>
  
        <button type="submit" className="btn px-5 py-3 bg-success fs-2 text-white fw-bold" > Submit</button>
      </form>
    </div>

  )
}

export default AddProduct