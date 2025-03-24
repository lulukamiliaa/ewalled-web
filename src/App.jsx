import { useState } from 'react'
import './App.css'
import { Link, Route, Routes, useLocation, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './components/Navbar'
import Container from './components/container'
import TransferPage from './pages/TransferPage'
import { AppContext } from './context/AppContext'
import BackgroundColor from './components/BackgroundColor'
import TopUpPage from './pages/TopUpPage'
import ProtectedRoute from './components/ProtectedRoute'
import authStore from './store/AuthStore'

function App() {
  const location = useLocation();
  const { isAuthenticated } = authStore(); 

  const Links = [
    { name: "Dashboard", href: "/" },
    { name: "Transfer", href: "/transfer" },
    { name: "Top Up", href: "/topup" },
    { name: "Sign Out", href: "/login" }
  ];

  const shouldRenderContainer = !['/login', '/register','*'].includes(location.pathname);

  const recipients = [
    { id: '900782139', name: 'Giz' },
    { id: '123456789', name: 'Alice' },
    { id: '987654321', name: 'Bob' },
  ];

  const paymentMethod = [
    {name: 'Credit Card' },
    {name: 'Debit Card' },
    {name: 'Transfer' },
  ]

  return (
    <>
      {shouldRenderContainer && (
        <BackgroundColor> 
          <Container>
            <Navbar navLinks={Links} />

            <Routes>
              <Route path="/" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
              <Route path="/transfer" element={<ProtectedRoute> <TransferPage data={recipients}/>  </ProtectedRoute>} />
              <Route path="/topup" element={<ProtectedRoute ><TopUpPage data={paymentMethod}/> </ProtectedRoute>} />
            </Routes>
          </Container>
        </BackgroundColor> 
      )}

      {!shouldRenderContainer && (
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  )
}

export default App
