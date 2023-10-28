import { useState } from 'react'
import cover from './assets/img/mcover02.png';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';


function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route
         path="/"
          element={<MainLayout />}>
          {/* <Route index element={<AllPages />} /> */}
           {/* <Route path="/allpages" element={<AllPages />} /> */}
            {/* <Route path="/national" element={<National />} /> */}
           {/* <Route path="/article/:id" element={<OneArticle />} /> */}
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        {/* <Route path="/adminpage" element={<AdminPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
