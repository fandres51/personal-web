import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function LayoutWithNav({ children }) {
    return (
        <div className='layout'>
            <div className="nav-container">
                <Navbar />
            </div>
            <div className="content">
                { children }
            </div>
        </div>
    )
}
