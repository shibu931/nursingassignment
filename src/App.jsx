import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BlogsPage from './Components/BlogsPage/BlogsPage'
import ScrollToTop from './Components/ScrollToTop'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<BlogsPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
