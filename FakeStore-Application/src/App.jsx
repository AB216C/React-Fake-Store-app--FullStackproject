import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from "./Components/HomePage"
import ProductListing from "./Components/ProductListing"
import ProductDetails from "./Components/ProductDetails"
import AddProduct from "./Components/AddProduct"
import UpdateProduct from "./Components/UpdateProduct"
import 'bootstrap/dist/css/bootstrap.css';
import { cartProvider } from "./Components/cartContext"

function App() {
  return (
    <div className="bg-warning px-5 py-5">
    <cartProvider>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}></Route>
          <Route path="/products" element={<ProductListing/>}></Route>
          <Route path="/product/detail/:productid" element={<ProductDetails/>}></Route>
          <Route path="/product/add" element={<AddProduct/>}></Route>
          <Route path="/product/update/:productid" element={<UpdateProduct/>}></Route>

        </Routes>
      </Router>
    </cartProvider>

    </div>
  )
}

export default App
