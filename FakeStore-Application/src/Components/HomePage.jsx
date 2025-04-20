import 'bootstrap/dist/css/bootstrap.css';
import NavigationPage from "./NavigationPage"
import { useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap';


function HomePage() {

  const navigate  = useNavigate()

  const showProductListing=()=>{
    navigate("/products")
  }

  return(
    <div className="bg-dark text-white fs-1 px-4 py-4 " >
      <NavigationPage/>
      <div className="fw-bolder my-5 " >
        <p>Welcome to our Store. We're here to serve you</p>
        <Button onClick={showProductListing} variant="danger" className="px-4 py-4 fw-bolder fs-3" >Enter the store</Button>
      </div>

    </div>

  )
}

export default HomePage