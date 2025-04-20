import 'bootstrap/dist/css/bootstrap.css';
import NavigationPage from "./NavigationPage"
import { useNavigate } from "react-router-dom"


function HomePage() {

  const navigate  = useNavigate()

  const showProductListing=()=>{
    navigate("/products")
  }

  return(
    <div>
      <NavigationPage/>
      <h1>This is E-commmerce Fake Store</h1>
      <p>Welcome to our Store. We are here to serve you</p>
      <button onClick={showProductListing}>Enter the store</button>
    </div>

  )
}

export default HomePage