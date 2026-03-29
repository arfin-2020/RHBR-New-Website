
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Pages/Nav'
import Home from './Pages/Home'

function App() {
 

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    </>
  )
}

export default App
