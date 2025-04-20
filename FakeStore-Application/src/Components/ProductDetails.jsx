import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Modal,Button} from 'react-bootstrap'


function ProductDetails() {
  const {productid} = useParams()
  const [productData,setProductData]=useState({})
  const [loading,setLoading]=useState(false)
  const [showModal,setShowModal]=useState(false)

  const navigate = useNavigate()

  const handleBackButton=()=>{
    navigate("/products")
  }

  const handleDelete=()=>{
    setLoading(true)
    fetch('https://fakestoreapi.com/products/'+productid, {
      method:"DELETE",
      headers: {
        "content-type":"application/json"
      }
    })

    .then((response)=>{
      alert("The Product  was deleted successfully")
      navigate("/products")
      setLoading(false)
    })

    .catch((error)=>{
      console.log("Unable to delete the product", error)
      setLoading(false)
    });
    setShowModal(false)
  }

  useEffect(()=> {
    setLoading(true)
    fetch('https://fakestoreapi.com/products/'+productid)
    .then((response)=>response.json())
    .then((data)=>{setProductData(data)})
    .catch((error)=>{console.log("Error occured fetching api:",error)})
    setLoading(false)

  },[])

  return(
    <div className="ProductDetails">

      <button onClick={()=>{handleBackButton()}} className="btn btn-lg btn-dark my-5 fs-1">Take Me Back</button>

      {loading&&<p>Deleting...</p>}

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
        <button onClick={()=>setShowModal(true)} className="btn btn-danger btn-lg mx-3" >Delete the item from listing</button>
        </div>
 
      </div>)
      }

       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-info">
          <Modal.Title>Confirm Product Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fw-bold">
          Are you sure you want to delete this product? Once deleted cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProductDetails