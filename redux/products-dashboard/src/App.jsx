import NavComponent from './components/NavComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { ToastContainer } from 'react-toastify'
import Login from './components/Login'

const App = () => {
  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
