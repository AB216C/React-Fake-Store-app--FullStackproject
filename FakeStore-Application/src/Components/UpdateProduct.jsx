import NavigationPage from "./NavigationPage"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function UpdateProduct() {

  const [title, setTitle] = useState("")
  const [price,setPrice] = useState("")
  const [description,setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [loading,setLoading]=useState(false)

  const navigate = useNavigate("")
  const {productid} = useParams()
  console.log(productid)

  useEffect(()=>{
    setLoading(true)
    fetch('https://fakestoreapi.com/products/'+productid)
    .then((response)=>response.json())
    .then((data)=>{
      setTitle(data.title)
      setPrice(data.price)
      setDescription(data.description)
      setCategory(data.category)
      setLoading(false)
    })
    .catch((error)=>{
      console.log("Unable to fetch data",error)
      setLoading(false)
    })

  },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const productData = {title, price, description, category}
    // console.log(productData)
    // console.log(title)
    // console.log(price)
    // console.log(description)
    // console.log(category)
    setLoading(true)
    fetch('https://fakestoreapi.com/products/'+productid, {
      method:"PUT",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(productData)
    })

    .then((response)=>response.json())
    .then((data)=>console.log(data))
    alert("Product updated successfully")
    navigate("/products")
    setLoading(false)
  
    .catch((error)=>{
      console.log("Unable to add the product data", error)
      setLoading(false)
    })
  }


  return(
    <div>

      <NavigationPage/>

    <h1 className="fw-bolder" >Update a Product</h1>

    {loading&&<p>Submitting...</p>}

    <form onSubmit={handleSubmit} >
      <label htmlFor="title">Title: </label>
      <input type="text" className="form-control" id="title" name="title" value={title} onChange={e=>setTitle(e.target.value)} />

      <label htmlFor="price">Price:$ </label>
      <input type="text" className="form-control"  id="title" name="title" value={price} onChange={e=>setPrice(e.target.value)} />

      <label htmlFor="description">Description: </label>
      <input type="text" className="form-control"  id="title" name="title" value={description} onChange={e=>setDescription(e.target.value)} />


      <label htmlFor="category">Category: </label>
      <input type="text" className="form-control"  id="title" name="title" value={category} onChange={e=>setCategory(e.target.value)} />

      <br/>
      <button type="submit" className="btn btn-lg btn-success fw-bold py-3"> Submit Changes</button>
    </form>
  
    </div>
  )
}

export default UpdateProduct