import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/users'} element={<Users />} />
          <Route path={'*'} element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}
