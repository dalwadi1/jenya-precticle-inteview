import SideBar from '@/components/SideBar'
import React from 'react'
import { Navigate, Outlet } from 'react-router'

const DashboardGuard = () => {

    const token = localStorage.getItem('token') || null

    if (!token) return <Navigate to={'/'} replace />

    return <div className='w-full h-screen flex items-center'>
        <SideBar />
        <div className='w-full h-full'>
            <Outlet />
        </div>
    </div>
}

export default DashboardGuard
