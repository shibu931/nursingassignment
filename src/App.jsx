import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import SearchResult from './Components/BlogsPage/SearchResult'
import BlogsPage from './Components/BlogsPage/BlogsPage'
import Article from './Components/BlogsPage/Article'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<BlogsPage/>}/>
          <Route path="/blogSearch" element={<SearchResult/>}/>
          <Route path='/article' element={<Article/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
