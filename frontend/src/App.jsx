import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Cart from "./pages/cart/Cart"
import Home from "./pages/home/Home"
import PlaceOrder from "./pages/place-order/PlaceOrder"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <div className="app scroll-smooth">


        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>

      </div>
     
      <Footer />
     

    </>
  )
}

export default App
