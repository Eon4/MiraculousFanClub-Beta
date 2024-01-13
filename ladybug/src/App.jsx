import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Homepage from './Pages/HomePage/homepage';
import Gallery from './Pages/Gallery/gallery';
import Fanfic from './Pages/Fanfic/fanfic';
import BlogPage from './Pages/Blog/blog';
import AboutPage from './Pages/About/about';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route
         path="/"
          element={<MainLayout />}>
          <Route index element={<Homepage />} />
           <Route path="/gallery" element={<Gallery />} />
            <Route path="/fanfic" element={<Fanfic />} />
           <Route path="/blogpage" element={<BlogPage />} />
           <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
