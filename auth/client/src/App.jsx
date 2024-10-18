import { Route, Routes } from 'react-router-dom'
import Signup from './components/signup'
import Otp from './components/otp'
import Login from './components/login'
import Dashboard from './components/dashboard'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/otp" element={<Otp />} />
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
