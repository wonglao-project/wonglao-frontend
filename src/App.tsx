import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import List from './pages/List'
import Map from './pages/Map'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/list" element={<List />} />
      <Route path="/map" element={<Map />} />
    </Routes>
    </>
  )
}

export default App
