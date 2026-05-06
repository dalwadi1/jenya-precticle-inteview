import React from 'react'
import { Navigate, Outlet } from 'react-router'

const AuthGuard = () => {
    const token = localStorage.getItem('token') || null

    if (token) return <Navigate to={'/dashboard'} replace />

    return <Outlet />
}

export default AuthGuard
