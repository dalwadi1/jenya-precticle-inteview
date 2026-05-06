import React from 'react'
import { Link, useNavigate } from 'react-router'

const SideBar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <div className='w-44 h-screen flex flex-col items-center justify-between bg-black p-8 gap-4'>
            <h5 className='text-white text-sm'><Link to={'/dashboard'}>Jenya Precticle</Link></h5>
            <ul>
                <li><Link className='text-white' to={'/dashboard/product'}>Product</Link></li>
            </ul>
            <button className='text-white cursor-pointer' onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default SideBar
