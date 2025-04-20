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
      <h1>This is E-commmerce Fake Store</h1>
      <p>Welcome to our Store. We are here to serve you</p>
      <Button onClick={showProductListing} variant="danger" >Enter the store</Button>
    </div>

  )
}

export default HomePage