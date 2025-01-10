import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import MovieDetail from './pages/movies/MovieDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function App() {

  return (
    
    
    <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
       
    
      
  )
}

export default App
