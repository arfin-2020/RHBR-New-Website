
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Pages/Nav'
import Home from './Pages/Home'
import MenuPage from './Pages/MenuPage'

function App() {
 

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
    </>
  )
}

export default App
