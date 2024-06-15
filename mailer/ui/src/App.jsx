import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import OTP from "./pages/OTP"
import Signup from "./pages/Signup"

function App() {

  return (
    <>
          <Routes>
              <Route index element={ <Login/>} />
              <Route path="/signup" element={ <Signup/>} />
              <Route path="/otp" element={ <OTP/>} />

     </Routes>
    </>
  )
}

export default App
