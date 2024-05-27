import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginHandler } from '../../../backend/controllers/user'
import axios from 'axios'
import { Base_URl } from '../config'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const loginHandler = async () => {
    try {
      if (!email || !password) {
        console.log('all fields are required')
        return
      }
      const obj = {
        email,
        password,
      }
      const Res = await axios.post(`${Base_URl}/login`, obj)
      console.log(Res)
    } catch (error) {
      let msg = error?.response?.data?.message || error.message
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
      <h1 style={headingStyle}>Login</h1>
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
      <Link to={'/signup'} style={linkStyle}>
        Account Signup?
      </Link>
      <button style={buttonStyle} onClick={loginHandler}>
        Login
      </button>
    </div>
  )
}

export default Login
