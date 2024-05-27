import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/Dashboard'
import Otp from './pages/Otp'
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="otp" element={<Otp />} />
      </Routes>
    </>
  )
}

export default App
