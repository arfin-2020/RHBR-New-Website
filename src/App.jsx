import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import Home from "./Pages/Home";
import MenuPage from "./Pages/MenuPage";
import AboutUs from "./Pages/AboutUS";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Pages/Footer";
import OffersPage from "./Pages/OffersPage";
import ReservationSection from "./Pages/ReservationForm";
import ScrollToTop from "./Pages/ScrollToTop";
import { Nav } from "./Pages/Nav";


const TRACKING_ID = "G-Y8VGR9PSST"; 
ReactGA.initialize(TRACKING_ID);


function App() {
  useEffect(() => {
    // This tracks the initial page load
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <>
      <ScrollToTop />
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/reservation" element={<ReservationSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
