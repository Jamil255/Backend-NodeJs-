import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Base_URl } from '../../config'
const Otp = () => {
  const [code, setCode] = useState("")
  const { state } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (!state?.email) {
      navigate('/')
    }
      }, [])
    
  const OtpHandler = async () => {
    try {
      if (!code) {
        console.log('input field is missing')
        return
      }
      const obj = {
        email: state?.email,
        otp: code,
      }
      const res = await axios.post(`${Base_URl}/otpVerify`, obj)
      console.log(res?.data?.data?.message)
      navigate('/')
    } catch (error) {
      console.log(error)
      const message = error?.response?.data?.message || error.message
      console.log(message)
    }
  }
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  }

  const headingStyle = {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  }

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '20px',
    width: '300px',
    maxWidth: '100%',
  }

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }

  return (
    <div style={containerStyle}>
      <h4 style={headingStyle}>Otp Verify</h4>
          <h2>Check your email:{ state?.email}</h2>
      <input
        type="text"
        placeholder="enter your otp Ex:123456"
        style={inputStyle}
        onChange={(e) => setCode(e.target.value)}
      />
      <br />

      <button style={buttonStyle} onClick={OtpHandler}>
        Verify
      </button>
    </div>
  )
}

export default Otp