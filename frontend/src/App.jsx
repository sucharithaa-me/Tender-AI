import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Navbar from "C:/Users/hp/Documents/Tender-AI/frontend/src/components/Navbar.jsx"
import Hero from "C:/Users/hp/Documents/Tender-AI/frontend/src/components/Hero.jsx"
import Features from "C:/Users/hp/Documents/Tender-AI/frontend/src/components/Features.jsx"
import HowItWorks from "C:/Users/hp/Documents/Tender-AI/frontend/src/components/Howitworks.jsx"
import CTA from "C:/Users/hp/Documents/Tender-AI/frontend/src/components/CTA.jsx"
import Footer from  "C:/Users/hp/Documents/Tender-AI/frontend/src/components/Footer.jsx"
import "C:/Users/hp/Documents/Tender-AI/frontend/src/App.css"

import Login from './pages/Login'
import Register from './pages/Register'

import './App.css'


function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
