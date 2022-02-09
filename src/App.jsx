import React from 'react'
import './scss/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Blank from './pages/blank'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Blank />} />
          <Route path="orders" element={<Blank />} />
          <Route path="customers" element={<Blank />} />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
