
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Pages/Nav'
import Home from './Pages/Home'
import MenuPage from './Pages/MenuPage'
import AboutUs from './Pages/AboutUS'
import ContactPage from './Pages/ContactPage'
import Footer from './Pages/Footer'

function App() {
 

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
