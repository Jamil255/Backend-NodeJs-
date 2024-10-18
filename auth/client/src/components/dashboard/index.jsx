import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const getToken = localStorage.getItem('token')
    const navigate=useNavigate()
  useEffect(() => {
    if (!getToken) {
      navigate('/')
    }
  }, [])
  return <div>Dashboard</div>
}

export default Dashboard
