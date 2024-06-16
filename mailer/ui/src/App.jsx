import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import OTP from "./pages/OTP"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <>
          <Routes>
              <Route index element={ <Login/>} />
              <Route path="/signup" element={ <Signup/>} />
              <Route path="/otp" element={ <OTP/>} />
              <Route path="/dashboard" element={ <Dashboard/>} />

     </Routes>
    </>
  )
}

export default App
