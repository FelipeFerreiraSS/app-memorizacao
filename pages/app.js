import React from "react";

import Login from '../components/Login'
import { useAuth } from '../context/AuthContext'
import Dashboard from '../components/Dashboard'

export default function App() {
  const { currentUser } = useAuth()

  return (
    <div>
      {!currentUser && <Login />}
      {currentUser && <Dashboard/>}
    </div>
  )
}