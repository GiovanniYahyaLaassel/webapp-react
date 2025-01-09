import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Layout>
    </Router>
    </div>
  )
}

export default App
