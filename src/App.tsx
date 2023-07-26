import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import List from './pages/List'
import Map from './pages/Map'
import Create from './pages/Create'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/content" element={<List />} />
      <Route path="/map" element={<Map />} />
      <Route path="/create" element={<Create />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App
