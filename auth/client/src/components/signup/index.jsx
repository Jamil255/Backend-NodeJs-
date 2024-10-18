import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Base_URl } from '../../config'
const Signup = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [userName, setuserName] = useState()
  const navigate = useNavigate()
  const getToken = localStorage.getItem('token')
  useEffect(() => {
    if (getToken) {
      navigate('/dashboard')
    }
  }, [])
  const signUpHandler = async () => {
    try {
      if (!email || !password || !userName) {
        console.log('all fields are required')
        return
      }
      const obj = {
        email,
        password,
        userName,
      }
      const respone = await axios.post(`${Base_URl}/signup`, obj)
      console.log(respone)
      navigate('/otp', {
        state: {
          email,
        },
      })
    } catch (error) {
      const msg = error?.response?.data?.message
      console.log(msg)
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

  const linkStyle = {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
    marginBottom: '20px',
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
      <h1 style={headingStyle}>Signup</h1>
      <input
        type="text"
        placeholder="enter your full name"
        style={inputStyle}
        onChange={(e) => setuserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your email"
        style={inputStyle}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter your password"
        style={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to={'/'} style={linkStyle}>
        Already have an account?
      </Link>
      <button style={buttonStyle} onClick={signUpHandler}>
        Signup
      </button>
    </div>
  )
}

export default Signup
