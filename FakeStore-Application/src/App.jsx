import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import HomePage from "./Components/HomePage"
import ProductListing from "./Components/ProductListing"
import ProductDetails from "./Components/ProductDetails"
import AddProduct from "./Components/AddProduct"
import UpdateProduct from "./Components/UpdateProduct"

function App() {
  return (
    <div>
    <p>Welcome to my App</p>

    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<HomePage/>}></Route>
          <Route path="/products" element={<ProductListing/>}></Route>
          <Route path="/product/detail/:productid" element={<ProductDetails/>}></Route>
          <Route path="/product/add" element={<AddProduct/>}></Route>
          <Route path="/product/update/:productid" element={<UpdateProduct/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>



    
    </div>
  )
}

export default App
