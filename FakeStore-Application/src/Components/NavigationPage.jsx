import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom"

function NavigationPage() {

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/products">Product Listing</Link> </li>
        <li><Link to="/product/add">Add Product</Link> </li>
      </ul>

    </nav>
  )
}

export default NavigationPage