import axios from 'axios'
import { useState } from 'react'
axios.defaults.withCredentials = true
function App() {
  const [inpValue, setInpValue] = useState('')
  const getCookiess = async () => {
    try {
      const dataRes = await axios.get('http://localhost:3000', {
        withCredentials: true,
      })
      console.log(dataRes)
    } catch (error) {
      console.warn(error.message)
    }
  }
  const handlePost = async () => {
    console.log(inpValue)
    try {
      const data = await axios.post('http://localhost:3000/addname', {
        inpValue,
      })
      console.log(data)
    } catch (error) {
      console.warn(error.message)
    }
  }
  return (
    <>
      <input
        type="text"
        name="name"
        value={inpValue}
        placeholder="enter your name"
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
      <button onClick={getCookiess}>Get</button>
    </>
  )
}

export default App
