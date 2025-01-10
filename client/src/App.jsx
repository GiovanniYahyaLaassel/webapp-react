import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    
    <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
    </BrowserRouter>
       
    
      
  )
}

export default App
