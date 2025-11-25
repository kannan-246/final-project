import React from 'react'
import { Navigate } from 'react-router-dom'

const Protect = ({ children }) => {

  const user = localStorage.getItem("username");

  // login pannala na → login page ku anupu
  if (!user) {
    return <Navigate to="/login" />
  }

  // login pannirundha → page open
  return children;
}

export default Protect;
