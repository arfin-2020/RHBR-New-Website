
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Pages/Nav'
import Home from './Pages/Home'
import MenuPage from './Pages/MenuPage'
import AboutUs from './Pages/AboutUS'
import ContactPage from './Pages/ContactPage'
import Footer from './Pages/Footer'
import OffersPage from './Pages/OffersPage'
import ReservationSection from './Pages/ReservationForm'
import ScrollToTop from './Pages/ScrollToTop'

function App() {
 

  return (
    <>
    <ScrollToTop />
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/offers" element={<OffersPage/>} />
      <Route path="/reservation" element={<ReservationSection/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
