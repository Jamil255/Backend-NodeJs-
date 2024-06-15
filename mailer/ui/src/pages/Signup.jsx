import React, { useState } from 'react'
import axios from 'axios'
import { Base_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [fullName, setfullName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const obj = {
        email,
        password,
        fullName,
      }
      const userRes = await axios.post(`${Base_URL}/signup`, obj)
      navigate('/otp', {
        state: {
          email,
        },
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Signup
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                onChange={(e) => setfullName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
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

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Signup
