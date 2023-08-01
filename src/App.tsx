import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/Home"
import Info from "./pages/Info"
import Map from "./pages/Map"
import Create from "./pages/Create"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Content from "./pages/Content"
import AOS from "aos"
import "aos/dist/aos.css"
import CreateProduct from "./pages/CreateProduct"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/content/:id' element={<Info />} />
        <Route path='/content/:id/product/create' element={<CreateProduct />} />
        <Route path='/map' element={<Map />} />
        <Route path='/create' element={<Create />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
