import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import CustomCursor from './components/common/CustomCursor'
import './styles/globals.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,           // Animation duration in ms
      once: true,              // Whether animation should happen only once
      offset: 100,             // Offset (in px) from the original trigger point
      easing: 'ease-out-cubic', // Easing function
      mirror: false,           // Whether elements should animate out while scrolling past them
    })
  }, [])
  return (
    <BrowserRouter>
      <CustomCursor />
      <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App