import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Base_URL } from '../config'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const loginHandler = async (event) => {
    try {
      console.log(email,password)
      event.preventDefault()
      const obj = {
        email,
        password,
      }
      const userRes = await axios.post(`${Base_URL}/login`, obj)
      localStorage.setItem('token', userRes.data?.token)
      navigate('/dashboard')
    } catch (error) {
      console.log(userRes)
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    token ? navigate('/dashboard') : navigate('/')
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="space-y-4" onSubmit={loginHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="flex items-center justify-between">
        
            <div className="text-sm">
              <Link
                to={'/signup'}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create A New Account
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
